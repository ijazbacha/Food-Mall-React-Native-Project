import React, { useState } from "react";
import { Image, View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Slices/CartSlice";

const foods = [
  {
    title: "YEELE Luxury Restaurant Wooden Chairs",
    description: "simply dummy text of the printing and  industry",
    image:
      "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg",
    price: "$113.5",
  },

  {
    title: "looked up one of the more obscure",
    description: "simply dummy text of the printing and  industry",
    image:
      "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg",
    price: "$113.5",
  },
  {
    title: "making it over 2000 years old",
    description: "simply dummy text of the printing and  industry",
    image:
      "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg",
    price: "$113.5",
  },

  {
    title: "It has roots in a piece of classical Latin",
    description: "simply dummy text of the printing and  industry",
    image:
      "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg",
    price: "$113.5",
  },
  {
    title: "Lorem Ipsum is not simply random text",
    description: "simply dummy text of the printing and  industry",
    image:
      "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg",
    price: "$113.5",
  },

  {
    title: "Contrary to popular belief",
    description: "simply dummy text of the printing and  industry",
    image:
      "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg",
    price: "$113.5",
  },
];

const MenuItems = ({ route }) => {
  const { name } = route.params;
  // console.log(name);
  const dispatch = useDispatch();

  const handleCheckBox = (food, restaurantName, checkboxState) => {
    return (
      // console.log(" restaurantName", restaurantName),
      dispatch(
        addToCart({
          ...food,
          restaurantName: restaurantName,
          checkboxState: checkboxState,
        })
      )
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              paddingVertical: 18,
              justifyContent: "space-around",
              paddingHorizontal: 8,
            }}
          >
            <BouncyCheckbox
              fillColor="green"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "lightgray", borderRadius: 8 }}
              onPress={(isChecked) => handleCheckBox(food, name, isChecked)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.8} style={{ marginHorizontal: 30 }} />
        </View>
      ))}
    </ScrollView>
  );
};

export default MenuItems;

const FoodInfo = (props) => (
  <View style={{ width: 230, justifyContent: "space-evenly" }}>
    <Text style={{ fontSize: 15, fontWeight: "700" }}>{props.food.title}</Text>
    <Text style={{ marginVertical: 4 }}>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <Image
    source={{ uri: props.food.image }}
    style={{ width: 100, height: 100, borderRadius: 8 }}
  />
);
