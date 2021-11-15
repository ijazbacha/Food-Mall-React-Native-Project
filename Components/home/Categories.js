import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const Categories = () => {
  const items = [
    {
      image: require("../../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      image: require("../../assets/images/soft-drink.png"),
      text: "Soft Drink",
    },
    {
      image: require("../../assets/images/fast-food.png"),
      text: "Fast Food",
    },
    {
      image: require("../../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../../assets/images/desserts.png"),
      text: "Desserts",
    },
    {
      image: require("../../assets/images/coffee-cup.png"),
      text: "Coffee",
    },
    {
      image: require("../../assets/images/mega-deals.png"),
      text: "Deals",
    },
  ];
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        paddingVertical: 10,
        marginTop: 8,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ marginRight: 17, paddingLeft: 10 }}>
            <Image source={item.image} style={{ width: 50, height: 40 }} />
            <Text style={{ fontWeight: "700", fontSize: 13 }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
