import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BaseUrl } from "./Urls";

const Profile = ({navigation}) => {
   const [token, setToken] = useState("");
   const getData = async () => {
     try {
       const token = await AsyncStorage.getItem("token");
       if (token !== null) {
         // value previously stored
         setToken(token);
       }
     } catch (e) {
       // error reading value
       console.log("error", e);
     }
   };
   useEffect(() => {
     getData();
   },[]);

   const logout = () => {
      console.log(typeof token ,token);
      axios
        .post(`${BaseUrl}/logout`, {
          // headers: { Authorization: `Bearer ${token}` },
          headers:{
            "Content-Type": "application/json",
            "X-Auth-Token": `${token}`,
          }
        })
        .then(function (response) {
          console.log(response.data);
          // navigation.navigate("SignInScreen");
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    };
   return (  
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello to Profile Screen</Text>

      <TouchableOpacity
        style={{
          padding: 20,
          borderRadius: 10,
          justifyContent: "center",
          backgroundColor: "#FF0000",
        }}
        onPress={logout}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
   );
}

export default Profile;