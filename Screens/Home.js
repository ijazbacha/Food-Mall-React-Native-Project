import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Categories from "../Components/Categories";
import HeaderBtns from "../Components/HeaderBtns";
import RestaurantItems from "../Components/RestaurantItems";
import SearchBar from "../Components/SearchBar";

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
    <View>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderBtns activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar handleCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </View>
  );
}
