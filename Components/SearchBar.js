import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = () => {
  return (
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "AIzaSyAKiihLv6WG3NkeAKJhdO059RV6QBe-2Wc",
          language: "en",
        }}
        styles={{
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            alignItems: "center",
            flexDirection: "row",
            marginRight: 10,
          },
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 4,
            color: "black",
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 8,
              backgroundColor: "white",
              paddingHorizontal: 8,
              paddingVertical: 6,
              borderRadius: 20,
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ paddingRight: 6 }}
            />
            <Text style={{}}>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;
