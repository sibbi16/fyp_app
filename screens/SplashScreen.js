import React from 'react';
import { 
   View, 
   Text, 
   TouchableOpacity, 
   Dimensions,
   StyleSheet,
   StatusBar,
   Image
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
const SplashScreen = () =>{
   return ( 
      <View style={styles.container}>
         <View style={styles.header}>
            <Image source={require('../assets/logo.png')}
               style={styles.logo}
               resizeMode="stretch"
            />
         </View>
         <View style={styles.footer}>
            <Text style={styles.title}>Happy Shopping with Sourcers!</Text>
            <Text style={styles.text}>Sign In To Account!</Text>
            <View style={styles.button}>
                <TouchableOpacity >
                    <LinearGradient
                        colors={['#A17818', '#A17818']}
                        style={styles.signIn}
                    >
                    <Text style={styles.textSign}>Get Started</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color="white" />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
         </View>
      </View>
    );
}

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.30;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#A17818'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});