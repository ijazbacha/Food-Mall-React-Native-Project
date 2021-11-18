import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import About from "../Components/restaurantDetails/About";
import CartBtn from "../Components/restaurantDetails/CartBtn";
import MenuItems from "../Components/restaurantDetails/MenuItems";

const RestaurantDetails = ({route, navigation}) => {
  // console.log("routes>>>", route.params)

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
  
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.7} style={{ marginBottom: 4 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <CartBtn navigation={navigation} />
    </View>
  );
};

export default RestaurantDetails;
