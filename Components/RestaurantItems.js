import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const RestaurantItems = ({restaurantData, ...props}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} >
     { restaurantData.map((restaurant, index) =>(
    <View key={index} style={{backgroundColor:"#fff", padding:10, marginVertical:5}}>
      <RestaurantImage image={restaurant.image_url} />
      <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
    </View>
))}
    </TouchableOpacity>
  );
};

export default RestaurantItems;

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
      resizeMode="cover"
    />
    <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
      <Ionicons name="heart-outline" size={30} style={{ color: "white" }} />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
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
        {props.name}
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
      <Text style={{ textAlign: "center", fontWeight:"700" }}>{props.rating}</Text>
    </View>
  </View>
);
