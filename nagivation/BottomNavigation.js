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
import Profile from "../screens/Profile";
import CartScreen from "../screens/CartScreen";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={{
      tabBarStyle: { height: 55, paddingTop:6 },
        headerShown: false,
        style: {
          borderTopWidth: 0,
          elevation: 0,
          marginTop:0
        },
        showLabel: false,
        activeTintColor: "#A17818",
      
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
         tabBarLabel:({ focused,color })=>(<Text style={{color:focused?"#A17818":"#696969"}}>Home</Text>),
          tabBarIcon: ({focused}) => (
            <Ionicons name="home-outline" style={{color:focused?"#A17818":"#696969"}} size={28} color="#A17818"></Ionicons>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
         tabBarLabel:({ focused,color })=>(<Text style={{color:focused?"#A17818":"#696969"}}>Search</Text>),
          tabBarIcon: ({focused}) => (
            <Ionicons name="search-outline"style={{color:focused?"#A17818":"#696969"}} size={28} color="#A17818"></Ionicons>
          ),
        }}
      />
       <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
         tabBarLabel:({ focused,color })=>(<Text style={{color:focused?"#A17818":"#696969"}}>Cart</Text>),
          tabBarIcon: ({focused}) => (
            <Ionicons name="cart-outline" size={28} style={{color:focused?"#A17818":"#696969"}} color="#A17818"></Ionicons>
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
         tabBarLabel:({ focused,color })=>(<Text style={{color:focused?"#A17818":"#696969"}}>Profile</Text>),
          tabBarIcon: ({focused}) => (
            <Ionicons name="person-outline" size={28} style={{color:focused?"#A17818":"#696969"}} color="#A17818"></Ionicons>
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default BottomNavigation;
