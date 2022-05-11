import react from "react";
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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            <Ionicons
              name="mail-outline"
              size={20}
              color="black"
            ></Ionicons>;
          },
        }}
      />
      {/* <Tab.Screen name="Messages" component={Messages} /> */}
    </Tab.Navigator>
  );
};

export default BottomNavigation;
