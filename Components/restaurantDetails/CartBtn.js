import React, { useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import firebase from "../../Firebase/Firebase";
import OrderItems from "./OrderItems";

const CartBtn = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { items, restaurantName } = useSelector(
    (state) => state.cart.selectedItem
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, currt) => prev + currt, 0);

  const fmtTotal = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const addOrderToFirebase = () => {
    const db = firebase.firestore();
    db.collection("orders").add({
      items: items,
      restaurantName: restaurantName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setModalVisible(false)
    navigation.navigate("OrderCompleted")
  };

  const viewModalContent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View style={{ height: 500, backgroundColor: "#fff" }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 10 }}>
                {restaurantName}
              </Text>

              {items.map((item, index) => (
                <OrderItems item={item} key={index} />
              ))}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: 10,
                  marginBottom: 15,
                }}
              >
                <Text style={{ width: 300, fontWeight: "700" }}>SubTotal</Text>
                <Text>${fmtTotal}</Text>
              </View>

              <TouchableOpacity
                onPress={() => addOrderToFirebase()}
                style={{
                  backgroundColor: "black",
                  padding: 13,
                  borderRadius: 30,
                  width: 250,
                  alignItems: "center",
                  marginVertical: 10,
                  alignItems: "flex-start",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "500",
                    marginLeft: 50,
                  }}
                >
                  Checkout
                </Text>
                <Text style={{ color: "white", fontSize: 16 }}>
                  ${fmtTotal}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  };

  

  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {viewModalContent()}
      </Modal>
      <View style={{ alignItems: "center" }}>
        {total ? (
          <View style={{ position: "absolute", bottom: 5 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: "black",
                padding: 10,
                borderRadius: 50,
                marginBottom: 10,
                width: 300,
                alignItems: "flex-start",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ color: "white", fontSize: 20, marginLeft: 60 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>${fmtTotal}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

export default CartBtn;
