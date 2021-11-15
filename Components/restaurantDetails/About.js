import React from "react";
import { Image, Text, View } from "react-native";

const image =
  "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg";

const title = "YEELE Luxury Restaurant Wooden Chairs";

const description = "Thai . Comfort Food . :card . 4 :star(2912+)";

const About = ({route}) => {
  const {name, image, price, rating, reviews, categories} = route.params

  const formatedCategories = categories.map((cat) => cat.title).join(" . ")

  const description = `${formatedCategories} ${price ? " . " + price : " "} , Rating: ${rating} , Reviews: (${reviews}+)`
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export default About;

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = ({ name }) => (
  <Text
    style={{
      fontSize: 25,
      fontWeight: "700",
      paddingVertical: 10,
      paddingHorizontal: 10,
    }}
  >
    {name}
  </Text>
);

const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      paddingBottom: 10,
      paddingHorizontal: 10,
      fontSize: 15,
      fontWeight: "400",
    }}
  >
    {description}
  </Text>
);
