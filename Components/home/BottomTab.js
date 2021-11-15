import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BottomTab = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 8,
        marginHorizontal: 10,
        padding: 14,
      }}
    >
      <Icon name="home" text="Home" />
      <Icon name="search" text="Browser" />
      <Icon name="shopping-bag" text="Grocery" />
      <Icon name="receipt" text="Orders" />
      <Icon name="user" text="Acount" />
    </View>
  );
};

export default BottomTab;

const Icon = (props) => (
  <TouchableOpacity
    style={{
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <FontAwesome5 name={props.name} size={25} />
    <Text>{props.text}</Text>
  </TouchableOpacity>
);
