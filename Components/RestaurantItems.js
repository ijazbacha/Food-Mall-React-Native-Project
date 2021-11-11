import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const RestaurantItems = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:"#fff", padding:10, marginVertical:10}}>
    <View>
      <RestaurantImage />
      <RestaurantInfo />
    </View>
    </TouchableOpacity>
  );
};

export default RestaurantItems;

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg",
      }}
      style={{ width: "100%", height: 180 }}
      resizeMode="cover"
    />
    <TouchableOpacity style={{ position: "absolute", top: 10, right: 20 }}>
      <Ionicons name="heart-outline" size={30} style={{ color: "white" }} />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Food Deals In Islamabad Today
      </Text>
      <Text style={{ color: "gray" }}>35 - 45 . min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        width: 30,
        height: 30,
        borderRadius: 50,
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ textAlign: "center", fontWeight:"700" }}>7</Text>
    </View>
  </View>
);
