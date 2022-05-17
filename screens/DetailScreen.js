import react from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailScreen = ({ route, navigation }) => {
  const homeUrl = "http://10.120.140.27/fyp/public/storage";
  const product = route.params.product;
  // console.log(product);
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 280,
          }}
        >
          <Image
             source={{uri:`${homeUrl}/${product.image.path}`}}
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
              <Ionicons
                name="heart-outline"
                size={25}
                color="#A17818"
              />
            </View>
          </View>
          <Text style={styles.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <TouchableOpacity
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
