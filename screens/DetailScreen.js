import react from "react";
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
import AsyncStorage  from '@react-native-async-storage/async-storage';

const DetailScreen = ({route , navigation}) => {
   console.log(route.params.product)
   return ( 
      <View>
         <Text>This is detail screen</Text>
      </View>
    );
}

export default DetailScreen;