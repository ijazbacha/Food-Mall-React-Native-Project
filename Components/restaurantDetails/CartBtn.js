import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CartBtn = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ position: "absolute", bottom: 5 }}>
        <TouchableOpacity activeOpacity={0.8}
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 50,
            marginBottom: 10,
            width: 300,
            alignItems: "flex-start",
            flexDirection:"row",
            justifyContent:"space-around"
          }}
        >
          <Text style={{ color: "white", fontSize: 20, marginLeft:60 }}>View Cart</Text>
          <Text style={{ color: "white", fontSize: 20 }}>$10</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartBtn;
