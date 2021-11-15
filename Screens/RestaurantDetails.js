import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../Components/restaurantDetails/About";
import CartBtn from "../Components/restaurantDetails/CartBtn";
import MenuItems from "../Components/restaurantDetails/MenuItems";

const RestaurantDetails = ({route}) => {
  console.log("routes>>>", route.params)
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.7} style={{ marginBottom: 4 }} />
      <MenuItems />
      <CartBtn />
    </View>
  );
};

export default RestaurantDetails;
