import React ,{ useState, useEffect }from "react";
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
   // const getData = async () => {
   //    try {
   //      const token = await AsyncStorage.getItem('token')
   //      if(token !== null) {
   //        // value previously stored
   //        console.log(token);
   //      }
   //    } catch(e) {
   //      // error reading value
   //      console.log(e);
   //    }
   //  }
   //  useEffect(()=>{
   //    getData();
   //  },[])
   return ( 
      <View style={{flex:1,alignItems:"center", justifyContent:"center"}}>
         <Text>
            Hello to Home Screen
         </Text>
         <TouchableOpacity style={{padding:20,borderRadius:10,justifyContent:"center" , backgroundColor:"#FF0000"}}
         onPress={()=>alert('Hello you')}
         >
            <Text>Logout</Text>
         </TouchableOpacity>
      </View>
    );
}

export  default HomeScreen