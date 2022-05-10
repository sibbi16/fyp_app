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

const HomeScreen = ({ navigation }) => {
  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        // value previously stored
        return token;
      }
    } catch (e) {
      // error reading value
      console.log("error", e);
    }
  };

  const logout = () => {
    const token = getData();
    console.log(token);
    axios
      .post("http://192.168.1.8/fyp/public/api/logout", {
        headers: { Authorization: `Bearer ${token}` },
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
      <Text>Hello to Home Screen</Text>

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
};

export default HomeScreen;
