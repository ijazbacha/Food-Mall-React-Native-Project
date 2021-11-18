import React, { useState } from "react";
import { Image, View, Text, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Slices/CartSlice";

const MenuItems = ({ restaurantName, foods, hideCheckBox, marginleft }) => {
  // const { restaurantName } = route.params;
  // console.log(name);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.selectedItem.items);

  const isFoodInCart = (cartItems, food) =>
    Boolean(cartItems.find((item) => item.title == food.title));

  const handleCheckBox = (food, restaurantName, checkboxState) => {
    return (
      // console.log(" restaurantName", restaurantName),
      dispatch(
        addToCart({
          ...food,
          restaurantName: restaurantName,
          checkboxState: checkboxState,
        })
      )
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              paddingVertical: 18,
              justifyContent: "space-around",
              paddingHorizontal: 8,
            }}
          >
            {hideCheckBox ? (
              <></>
            ) : (
              <BouncyCheckbox
                fillColor="green"
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: "lightgray", borderRadius: 8 }}
                isChecked={isFoodInCart(cartItems, food)}
                onPress={(isChecked) =>
                  handleCheckBox(food, restaurantName, isChecked)
                }
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.8} style={{ marginHorizontal: 30 }} />
        </View>
      ))}
    </ScrollView>
  );
};

export default MenuItems;

const FoodInfo = (props) => (
  <View style={{ width: 230, justifyContent: "space-evenly" }}>
    <Text style={{ fontSize: 15, fontWeight: "700" }}>{props.food.title}</Text>
    <Text style={{ marginVertical: 4 }}>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <Image
    source={{ uri: props.food.image }}
    style={{ width: 100, height: 100, borderRadius: 8 }}
  />
);
