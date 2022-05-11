import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  Alert,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
// import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <Text style={{ fontSize: 28 }}>Hello,</Text>
            <Text style={{ fontSize: 28, marginLeft: 10, fontWeight: "bold" }}>
              Sir
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 22, color: "#908e8c" }}>
            What do you want today
          </Text>
        </View>
        <Image
          source={require("../assets/sibz.jpg")}
          style={{ height: 50, width: 50, borderRadius: 25, marginTop: 35 }}
        />
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          paddingHorizontal: 20,
        }}
      >
        <View style={styles.inputContainer}>
        <Ionicons name="search-outline" size={20} color="black"></Ionicons>
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search for food"
          />
        </View>
        <View style={styles.sortBtn}>
        <Ionicons name="filter-outline" size={20} color="white"></Ionicons>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: "#A17818",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 220,
    // width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: "#fff",
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    // backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
