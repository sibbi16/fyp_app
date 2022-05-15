import React from "react";
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
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";
import axios from "axios";
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { BaseUrl } from "./Urls";


const SignInScreen = ({ navigation }) => {
  const [errors, setError] = React.useState({
    email: "",
    password: "",
  });
  const [data, setData] = React.useState({
    email: "",
    password: "",
    secureTextEntry: true,
  });

  const setEmailData = (val) => {
    setData({
      ...data,
      email: val,
    });
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  // adding fun
  const storeData = async (token) => {
    try {
      const jsonValue = JSON.stringify(token)
      await AsyncStorage.setItem('token', jsonValue)
    } catch (e) {
      console.log(e);
    }
  }

  const HandleLogin = () => {
    console.log(data.email, data.password);
    axios
      .post(`${BaseUrl}/login`, {
        email: data.email,
        password: data.password,
      })
      .then(function (response) {
        console.log(response.data);
        const token = response.data.data.token;
        storeData(token);
       
        navigation.navigate("HomeScreen");
      })
      .catch(function (error) {
        console.log(error.response.data);
        Alert.alert("Incorrect data");
        setError({
          ...errors,
          email: error.response.data.errors["email"],
          password: error.response.data.errors["password"],
        });
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <Ionicons name="person-outline" size={20} color="black" />
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setEmailData(val)}
          />
        </View>
        {errors.email ? (
          <Text style={{ color: "#FF0000" }}>{errors.email}</Text>
        ) : null}
        <Text style={[styles.text_footer, { marginTop: 15 }]}>Password</Text>
        <View style={styles.action}>
          <Ionicons name="lock-closed-outline" size={20} color="black" />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />

          {data.secureTextEntry ? (
            <TouchableOpacity onPress={updateSecureTextEntry}>
              <Ionicons
                name="eye-off-outline"
                size={20}
                color="black"
              ></Ionicons>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={updateSecureTextEntry}>
              <Ionicons name="eye-outline" size={20} color="black"></Ionicons>
            </TouchableOpacity>
          )}
        </View>
        {errors.password ? (
          <Text style={{ color: "#FF0000" }}>{errors.password}</Text>
        ) : null}
        <View style={styles.button}>
          <LinearGradient colors={["#A17818", "#A17818"]} style={styles.signIn}>
            <Text
              style={[styles.textSign, { color: "#fff" }]}
              onPress={HandleLogin}
            >
              Sign In
            </Text>
          </LinearGradient>
          <TouchableOpacity
            style={[
              styles.signIn,
              {
                borderColor: "#A17818",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#A17818",
                },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          {/* adding temporary button */}
          <TouchableOpacity
            style={[
              styles.signIn,
              {
                borderColor: "#A17818",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#A17818",
                },
              ]}
            >
              Go to Home page temporary
            </Text>
          </TouchableOpacity>
          {/* button end here it must be removed */}
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A17818",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 0,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
