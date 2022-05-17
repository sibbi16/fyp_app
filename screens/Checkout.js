import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";
import Toast from "react-native-toast-message";

const Checkout = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Your Information</Text>
      </View>
      <Toast
        refs={(refs) => {
          Toast.setRef(refs);
        }}
      />
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Name</Text>
        <View style={styles.action}>
          <Ionicons name="person-outline" size={20} color="black" />
          <TextInput
            placeholder="Your Name"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setEmailData(val)}
          />
        </View>
        <Text style={styles.text_footer}>Address</Text>
        <View style={styles.action}>
          <Ionicons name="mail-outline" size={20} color="black" />
          <TextInput
            placeholder="Your Address"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setEmailData(val)}
          />
        </View>
        <Text style={styles.text_footer}>Phone</Text>
        <View style={styles.action}>
          <Ionicons name="call-outline" size={20} color="black" />
          <TextInput
            placeholder="Your Phone"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setEmailData(val)}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            Toast.show({
              position: "top",
              text1: "Success",
              text2: "Order has been Placed",
            });
            navigation.navigate('HomeScreen')
          }}
          style={[
            styles.signIn,
            {
              borderColor: "#A17818",
              borderWidth: 1,
              marginTop: 15,
            },
          ]}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: "#A17818",
              },
            ]}
          >
            Place Order
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default Checkout;

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
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 0,
    paddingLeft: 10,
    color: "#05375a",
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
