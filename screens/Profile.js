import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BaseUrl } from "./Urls";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = ({ navigation }) => {
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
  }, []);

  const logout = () => {
    console.log(typeof token, token);
    axios
      .post(`${BaseUrl}/logout`, {}, { headers: {"Authorization" : `Bearer ${token}`} })
      .then(function (response) {
        console.log(response.data);
        // navigation.navigate("SignInScreen");
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#A17818", }}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Profile
        </Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profile}>
          <Image
            source={require("../assets/profile-image.png")}
            style={{ resizeMode: "contain", width: 200, height: 200 }}
          />
        </View>
        <TouchableOpacity
          style={{
            width: "80%",
            marginTop: 10,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            borderColor: "#A17818",
            borderWidth: 1,
          }}
          onPress={logout}
        >
          <Text style={{fontSize:25,fontWeight:"bold",color:"#A17818"}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  header: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#A17818",
  },
  profileContainer: {
    flex: 1.5,
    backgroundColor:"#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
  },
  profile: {
    borderRadius: 100,
    marginTop: -80,
  },
});
