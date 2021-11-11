import React from "react";
import { ScrollView, Text, View } from "react-native";
import Categories from "../Components/Categories";
import HeaderBtns from "../Components/HeaderBtns";
import RestaurantItems from "../Components/RestaurantItems";
import SearchBar from "../Components/SearchBar";

export default function Home() {
  return (
    <View>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderBtns />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems />
        <RestaurantItems />
        <RestaurantItems />
        <RestaurantItems />
        <RestaurantItems />
        <RestaurantItems />
        <RestaurantItems />
        <RestaurantItems />
      </ScrollView>
    </View>
  );
}
