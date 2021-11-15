import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RootNavigation from "./Navigation/Navigation";
import Home from "./Screens/Home";
import RestaurantDetails from "./Screens/RestaurantDetails";

export default function App() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}

      <RootNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
