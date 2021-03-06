import react from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { homeUrl } from "../screens/Urls";
import {
  increment,
  decrement,
  clear,
  removeItem,
} from "../redux/cart/CartSlice";
import { cartTotalPriceSelector } from "../redux/Selector";

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);
  const CartCard = ({ product }) => {
    return (
      <View style={styles.cartCard}>
        <Image
          source={{ uri: `${homeUrl}/${product.image.path}` }}
          style={{ height: 80, width: 80 }}
        />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {product.name}
          </Text>

          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            {product.price}/RS
          </Text>
        </View>
        <View style={{ marginRight: 20, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {product.quantity}
          </Text>
          <View style={styles.actionBtn}>
            <TouchableOpacity
              onPress={() => {
                dispatch(decrement(product.id));
              }}
            >
              <Ionicons name="remove-outline" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                dispatch(increment(product.id));
              }}
            >
              <Ionicons name="add-outline" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ top: -20, right: -20, position: "absolute" }}>
            <TouchableOpacity
              style={{}}
              onPress={() => {
                dispatch(removeItem(product.id));
              }}
            >
              <Ionicons name="close-outline" size={30} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          size={28}
          color="#000"
          onPress={() => navigation.goBack()}
        ></Ionicons>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartCard product={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 15,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Total Price
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {totalPrice}/RS
              </Text>
            </View>
            <View style={{ marginHorizontal: 30 }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Checkout")
                }
                style={{
                  width: "100%",
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#A17818",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 20,
                  }}
                >
                  Proceed
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: "#A17818",
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});
