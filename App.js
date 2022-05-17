import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import DetailScreen from "./screens/DetailScreen";
import CartScreen from "./screens/CartScreen";
import BottomNavigation from "./nagivation/BottomNavigation";
import store from "./redux/Store";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import Checkout from "./screens/Checkout";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="HomeScreen" component={BottomNavigation} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Checkout" component={Checkout} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

