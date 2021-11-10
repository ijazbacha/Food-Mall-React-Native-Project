import React from "react";
import { Text, View } from "react-native";
import HeaderBtns from "../Components/HeaderBtns";
import SearchBar from "../Components/SearchBar";

export default function Home() {
  return (
    <View>
      <HeaderBtns />
      <SearchBar />
    </View>
  );
}
