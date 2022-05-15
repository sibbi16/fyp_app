import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;
import Categories from "../data/Categories";
import Products from "../data/Products";
import { NavigationContainer } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}
      >
        {Categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View
              style={[
                styles.categoryBtn,
                {
                  backgroundColor:
                    selectedCategoryIndex == index ? "#A17818" : "#E5E5E5",
                },
              ]}
            >
              <View>
                <Image
                  source={category.image}
                  style={{
                    width: 35,
                    height: 35,
                    resizeMode: "cover",
                    borderRadius: 30,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 10,
                    color: selectedCategoryIndex == index ? "#fff" : "#A17818",
                  }}
                >
                  {category.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Card = ({ product }) => {
    return (
      <TouchableHighlight
        underlayColor="#fff"
        activeOpacity={0.9}
        onPress={() =>
          navigation.navigate("DetailScreen", { product: product })
        }
      >
        <View style={styles.card}>
          <View style={{ alignItems: "center", top: -40 }}>
            <Image
              source={product.image}
              style={{ height: 120, width: 120, borderRadius: 50 }}
            />
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}
            >
              {product.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginHorizontal: 20,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {product.price}/Rs
            </Text>
            <Text style={styles.addToCartBtn}>
              <TouchableOpacity>
                <Ionicons name="add-outline" size={28} color="#fff"></Ionicons>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
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
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={Products}
        renderItem={({item}) => <Card product={item} />}
      />
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
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: "#fff",
  },
  addToCartBtn: {
    height: 28,
    width: 28,
    borderRadius: 20,
    backgroundColor: "#A17818",
    justifyContent: "center",
    alignItems: "center",
  },
});
