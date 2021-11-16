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
import { Provider } from "react-redux";
import { store } from "./Store/Store";

export default function App() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      {/* <Home /> */}
      {/* <RestaurantDetails /> */}
      <Provider store={store}>
        <RootNavigation />
      </Provider>
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
