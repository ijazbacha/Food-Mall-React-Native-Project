import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const CartBtn = () => {
  const items = useSelector((state) => state.cart.selectedItem.items);

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, currt) => prev + currt, 0);

  const fmtTotal = total.toLocaleString("en-US", {
    style: "currency",
    currency : "USD",
  });

  return (
    <View style={{ alignItems: "center" }}>
      {
        fmtTotal > 0 ?
        <View style={{ position: "absolute", bottom: 5 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 50,
            marginBottom: 10,
            width: 300,
            alignItems: "flex-start",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text style={{ color: "white", fontSize: 20, marginLeft: 60 }}>
            View Cart
          </Text>
          <Text style={{ color: "white", fontSize: 20 }}>${fmtTotal}</Text>
        </TouchableOpacity>
      </View>
      :
      <View></View>
      }
      
    </View>
  );
};

export default CartBtn;
