import react from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { addToCart } from "../redux/cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import {homeUrl} from '../screens/Urls';
import Toast from 'react-native-toast-message';

const DetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const product = route.params.product;
  // console.log(product);
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          size={28}
          color="#000"
          onPress={() => navigation.goBack()}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 10 }}>
          Details
        </Text>
      </View>
    <Toast ref={(ref)=>{Toast.setRef(ref)}} style={{top:50,zIndex:4,paddingTop:30}}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 280,
          }}
        >
          <Image
            source={{ uri: `${homeUrl}/${product.image.path}` }}
            style={{ height: 220, width: 220, borderRadius: 100 }}
          />
        </View>
        <View style={styles.details}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 25, color: "#fff", fontWeight: "bold" }}>
              {product.name}
            </Text>
            <View style={styles.iconContainer}>
              <Ionicons name="heart-outline" size={25} color="#A17818" />
            </View>
          </View>
          <Text style={styles.detailsText}>{product.description}</Text>
          <View style={{ marginTop: 40, marginBottom: 80 }}>
            <TouchableOpacity
              onPress={() => {
                dispatch(addToCart(product));
                Toast.show({
                  position:"top",
                  text1:'Success',
                  text2:'Product added to cart'
                })
              }}
              style={{
                width: "100%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "#A17818",
                  fontSize: 20,
                }}
              >
                Add to cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    flex: 2,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: "#A17818",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: "#fff",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: "#fff",
  },
});
export default DetailScreen;
