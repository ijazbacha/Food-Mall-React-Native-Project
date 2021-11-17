import React from "react";
import { Text, View } from "react-native";

function OrderItems(props) {
  const { title, price } = props.item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems:"center",
        padding: 7,
        paddingVertical: 15,
        marginTop:15,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Text style={{ width: 300, color: "black" }}>{title}</Text>
      <Text>{price}</Text>
    </View>
  );
}

export default OrderItems;
