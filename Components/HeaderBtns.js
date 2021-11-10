import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function HeaderBtns() {
  const [activeTab, setActiveTab] = useState('Delivery')
  return (
    <View style={{ flexDirection: "row", justifyContent: "center"  }}>
      <CustomBtn text="Delivery" activeTab={activeTab} setActiveTab={setActiveTab}/>
      <CustomBtn text="PickUp" activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}

const CustomBtn = ({ text, bgColor, tColor, activeTab, setActiveTab, ...props }) => {
  
  return (
    <TouchableOpacity onPress={() => setActiveTab(text)}
      style={{
        backgroundColor:  activeTab === text ? 'black' : "white" ,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
      }}
    >
      <Text style={{ color: activeTab === text ? 'white' : "black" , fontWeight: "700" }}>{text}</Text>
    </TouchableOpacity>
  );
};
