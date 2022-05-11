import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BaseUrl } from "./Urls";

const SignUpScreen = ({ navigation }) => {
  const [errors, setError] = React.useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [data, setData] = React.useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    secureTextEntry: true,
    confirmSecureTextEntry: true,
  });

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
  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirmPassword: val,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const confirmSecureTextEntry = () => {
    setData({
      ...data,
      confirmSecureTextEntry: !data.confirmSecureTextEntry,
    });
  };
  const handleFirstName = (val) => {
    setData({
      ...data,
      fname: val,
    });
  };
  const handleLastName = (val) => {
    setData({
      ...data,
      lname: val,
    });
  };
  const handleEmail = (val) => {
    setData({
      ...data,
      email: val,
    });
  };
  const handlePhone = (val) => {
    setData({
      ...data,
      phone: val,
    });
  };
  const handleAddress = (val) => {
    setData({
      ...data,
      address: val,
    });
  };
  // storing token for user
   // adding fun
   const storeData = async (token) => {
    try {
      const jsonValue = JSON.stringify(token)
      await AsyncStorage.setItem('token', jsonValue)
    } catch (e) {
      console.log(e);
    }
  }

  // saving data to database
  const HandleRegister = () => {
    axios
      .post(`${BaseUrl}/register`, {
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        phone: data.phone,
        address: data.address,
        password: data.password,
        password_confirmation: data.confirmPassword,
      })
      .then(function (response) {
        // console.log(response.data);
        const token = response.data.data.token;
        storeData(token);

        navigation.navigate("HomeScreen");
      })
      .catch(function (error) {
        setError({
          ...errors,
          fname: error.response.data.errors["fname"],
          lname: error.response.data.errors["lname"],
          email: error.response.data.errors["email"],
          phone: error.response.data.errors["phone"],
          address: error.response.data.errors["address"],
          password: error.response.data.errors["password"],
        });
        console.log(error.response.data);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        {/* names */}
        <ScrollView>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: "50%" }}>
              <Text style={styles.text_footer}>First name</Text>
              <View style={styles.action}>
                <Ionicons name="person-outline" size={20} color="black" />
                <TextInput
                  onChangeText={(val) => handleFirstName(val)}
                  placeholder="First name"
                  placeholderTextColor="#666666"
                  style={styles.textInput}
                  autoCapitalize="none"
                />
              </View>
              {errors.fname ? (
                <Text style={{ color: "#FF0000" }}>{errors.fname}</Text>
              ) : null}
            </View>
            <View style={{ width: "50%", marginLeft: 20 }}>
              <Text style={styles.text_footer}>Last name</Text>
              <View style={styles.action}>
                <Ionicons name="person-outline" size={20} color="black" />
                <TextInput
                  onChangeText={(val) => handleLastName(val)}
                  placeholder="Last name"
                  placeholderTextColor="#666666"
                  style={styles.textInput}
                  autoCapitalize="none"
                />
              </View>
              {errors.lname ? (
                <Text style={{ color: "#FF0000" }}>{errors.lname}</Text>
              ) : null}
            </View>
          </View>
          {/* email */}
          <Text style={[styles.text_footer, { marginTop: 25 }]}>Email</Text>
          <View style={styles.action}>
            <Ionicons name="mail-outline" size={20} color="black" />
            <TextInput
              onChangeText={(val) => handleEmail(val)}
              placeholder="Your Email"
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          {errors.email ? (
            <Text style={{ color: "#FF0000" }}>{errors.email}</Text>
          ) : null}

          {/* phone */}
          <Text style={[styles.text_footer, { marginTop: 25 }]}>Phone</Text>
          <View style={styles.action}>
            <Ionicons name="call-outline" size={20} color="black" />
            <TextInput
              onChangeText={(val) => handlePhone(val)}
              placeholder="Phone#"
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          {errors.phone ? (
            <Text style={{ color: "#FF0000" }}>{errors.phone}</Text>
          ) : null}

          {/* addresss */}
          <Text style={[styles.text_footer, { marginTop: 25 }]}>Addresss</Text>
          <View style={styles.action}>
            <Ionicons name="home-outline" size={20} color="black" />
            <TextInput
              onChangeText={(val) => handleAddress(val)}
              placeholder="Address"
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          {errors.address ? (
            <Text style={{ color: "#FF0000" }}>{errors.address}</Text>
          ) : null}

          <Text style={[styles.text_footer, { marginTop: 25 }]}>Password</Text>
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

          <Text style={[styles.text_footer, { marginTop: 25 }]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Ionicons name="lock-closed-outline" size={20} color="black" />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.confirmSecureTextEntry ? true : false}
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            {data.confirmSecureTextEntry ? (
              <TouchableOpacity onPress={confirmSecureTextEntry}>
                <Ionicons
                  name="eye-off-outline"
                  size={20}
                  color="black"
                ></Ionicons>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={confirmSecureTextEntry}>
                <Ionicons name="eye-outline" size={20} color="black"></Ionicons>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
        <View style={styles.button}>
          <LinearGradient colors={["#A17818", "#A17818"]} style={styles.signIn}>
            <Text
              style={[styles.textSign, { color: "#fff" }]}
              onPress={HandleRegister}
            >
              Sign Up
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
            onPress={() => navigation.navigate("SignInScreen")}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#A17818",
                },
              ]}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A17818",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer: {
    flex: 5,
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
