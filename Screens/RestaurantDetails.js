import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../Components/restaurantDetails/About";
import MenuItems from "../Components/restaurantDetails/MenuItems";

const RestaurantDetails = () => {
  return (
    <View style={{ flex: 1 }}>
      <About />
      <Divider width={1.7} style={{ marginBottom: 4 }} />
      <MenuItems />
    </View>
  );
};

export default RestaurantDetails;