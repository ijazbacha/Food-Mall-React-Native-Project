import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LottieView from "lottie-react-native";
import MenuItems from "../Components/restaurantDetails/MenuItems";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Slices/CartSlice";

const OrderCompleted = ({ navigation }) => {
  const { items, restaurantName } = useSelector(
    (state) => state.cart.selectedItem
  );

  const dispatch = useDispatch();

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, currt) => prev + currt, 0);

  const fmtTotal = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  // const lastorder = [
  //     {
  //       title: "YEELE Luxury Restaurant Wooden Chairs",
  //       description: "simply dummy text of the printing and  industry",
  //       image:
  //         "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg",
  //       price: "$113.5",
  //     },
  // ]

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* completed animation  */}
      <LottieView
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={false}
        style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
      />

      {/* restaurant Name */}
      <Text
        style={{
          fontSize: 15,
          fontWeight: "700",
          textAlign: "center",
          marginBottom: 10,
          padding: 10,
        }}
      >
        Your order at {restaurantName} has been placed for ${fmtTotal}
      </Text>
      {/* MenuItems */}
      <MenuItems foods={items} hideCheckBox={true} />

      {/* Done btn */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            backgroundColor: "#77D970",
            padding: 13,
            paddingHorizontal: 25,
            borderRadius: 20,
          }}
          onPress={() => {
            dispatch(clearCart());
            navigation.navigate("Home");
          }}
        >
          <Text style={{ fontSize: 18, color: "#fff" }}>Done</Text>
        </TouchableOpacity>
      </View>
      {/* cooking animation */}
      <LottieView
        source={require("../assets/animations/cooking.json")}
        autoPlay
        speed={0.5}
        style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
      />
    </View>
  );
};

export default OrderCompleted;
