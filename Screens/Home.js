import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import BottomTab from "../Components/home/BottomTab";
import Categories from "../Components/home/Categories";
import HeaderBtns from "../Components/home/HeaderBtns";
import RestaurantItems from "../Components/home/RestaurantItems";
import SearchBar from "../Components/home/SearchBar";

const YELP_API_KEY =
  "l0V3W2b7CiztIyFcpXjxD3NDcOvlVPcGHVUCireTcDsRp7KsJXufCycCJJdEIg3S7rcQ3YvnXPCNtbxuA-WiEottJ4wJ9OzWfLs2TDyZ4Dlbyk4rMhHgOxyDnwCOYXYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("SanDiego");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOption = {
      headers: {
        authorization: ` Bearer ${YELP_API_KEY} `,
      },
    };
    return await fetch(yelpUrl, apiOption)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((businesses) =>
            businesses.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab]);

  // console.log("Restaurant Data>>>>>>>", restaurantData);
  // console.log("city Data>>>>>>>", city);
  return (
    <View style={{ flex:1}}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderBtns activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar handleCity={setCity} />
      </View>
      <Divider width={1} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
