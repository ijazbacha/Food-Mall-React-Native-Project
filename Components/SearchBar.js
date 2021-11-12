import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = ({handleCity}) => {
  const [getSearch, setGetSearch] = useState("")

  const handleSubmit = () =>{
    handleCity(getSearch)
    setGetSearch("")
  }
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 10,
        backgroundColor: "#eee",
        width: "100%",
        height: 50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems:"center" }}>
        <View style={{ marginLeft: 10 }}>
          <Ionicons name="location-sharp" size={24} />
        </View>
        <View>
          <TextInput
            placeholder="Search"
            style={{
              backgroundColor: "#eee",
              borderRadius: 20,
              fontWeight: "700",
              width: 240,
              height:"100%",
              paddingLeft: 6,
            }}
            onChangeText={(e) => setGetSearch(e) }
            value={getSearch}
          />
        </View>
      </View>
      <TouchableOpacity onPress={handleSubmit}
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
        <AntDesign name="clockcircle" size={11} style={{ paddingRight: 6 }} />
        <Text >Search</Text>
      </TouchableOpacity>
    </View>

    //     <View
    //     style={{
    //       flexDirection: "row",
    //       marginTop: 10,
    //       backgroundColor: "#eee",
    //       alignItems: "center",
    //     }}
    //     >
    //     <GooglePlacesAutocomplete
    //      placeholder="Search"
    //     onPress={(data, details = null) => {
    //       // 'details' is provided when fetchDetails = true
    //       console.log(data, details);
    //     }}
    //     query={{
    //       key: "AIzaSyAKiihLv6WG3NkeAKJhdO059RV6QBe-2Wc",
    //       language: "en",
    //     }}
    //     styles={{
    //       textInputContainer: {
    //         backgroundColor: "#eee",
    //         borderRadius: 50,
    //         alignItems: "center",
    //         flexDirection: "row",
    //         marginRight: 10,
    //       },
    //       textInput: {
    //         backgroundColor: "#eee",
    //         borderRadius: 20,
    //         fontWeight: "700",
    //         marginTop: 4,
    //         color: "black",
    //       },
    //     }}
    //     renderLeftButton={() => (
    //       <View style={{ marginLeft: 10 }}>
    //         <Ionicons name="location-sharp" size={24} />
    //       </View>
    //     )}
    //     renderRightButton={() => (
    //       <View
    //         style={{
    //           flexDirection: "row",
    //           alignItems: "center",
    //           marginRight: 8,
    //           backgroundColor: "white",
    //           paddingHorizontal: 8,
    //            paddingVertical: 6,
    //            borderRadius: 20,
    //          }}
    //        >
    //          <AntDesign
    //            name="clockcircle"
    //            size={11}
    //            style={{ paddingRight: 6 }}
    //          />
    //         <Text style={{}}>Search</Text>
    //        </View>
    //     )}
    //   />
    // </View>
  );
};

export default SearchBar;
