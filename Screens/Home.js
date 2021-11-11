import React from "react";
import { Text, View } from "react-native";
import Categories from "../Components/Categories";
import HeaderBtns from "../Components/HeaderBtns";
import SearchBar from "../Components/SearchBar";

export default function Home() {
  return (
    <View>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderBtns />
        <SearchBar />
      </View>
      <Categories />
    </View>
  );
}
