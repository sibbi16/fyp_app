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

const HomeScreen = ({navigation}) => {
   return ( 
      <View style={{flex:1,alignItems:"center", justifyContent:"center"}}>
         <Text>
            Hello to Home Home Screen
         </Text>
      </View>
    );
}

export  default HomeScreen