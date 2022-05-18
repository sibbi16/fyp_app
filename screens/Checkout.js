import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from "react-native-animatable";
import Toast from "react-native-toast-message";
import { BaseUrl } from "./Urls";
import axios from "axios";
import { clear } from "../redux/cart/CartSlice";
import { cartTotalPriceSelector } from "../redux/Selector";
import { useDispatch, useSelector } from "react-redux";

const Checkout = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);
  const mappedCart = cart.map((item) => {
    return {
      product_id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    };
  });
  const [token, setToken] = useState("");

  const [data, setData] = useState({
    pickup_person_name: "",
    pickup_person_phone: "",
    shipping_address: "",
  });
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

  function placeOrder() {
    axios
      .post(
        `${BaseUrl}/orders`,
        {
          pickup_person_name: data.pickup_person_name,
          pickup_person_phone: data.shipping_address,
          shipping_address: data.pickup_person_phone,
          total_price: JSON.stringify(totalPrice),
          products: mappedCart,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(function (response) {
        // handle success
        console.log(response.data);
        Alert.alert(
          "Alert Title",
          "Your Order is Placed",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => {
            dispatch(clear(cart)),
            navigation.navigate("Home")
            }
           }
          ]
        );
      
        
        
      })
      .catch(function (error) {
        // handle error
        console.log(error.response.data);
      });
  }
  // function
  const setNameData = (val) => {
    setData({
      ...data,
      pickup_person_name: val,
    });
  };
  const setAddressData = (val) => {
    setData({
      ...data,
      shipping_address: val,
    });
  };
  const setPhoneData = (val) => {
    setData({
      ...data,
      pickup_person_phone: val,
    });
  };

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
            onChangeText={(val) => setNameData(val)}
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
            onChangeText={(val) => setAddressData(val)}
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
            onChangeText={(val) => setPhoneData(val)}
          />
        </View>
        <TouchableOpacity
          onPress={placeOrder}
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
