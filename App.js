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
import Home from "./Screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <Home />
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
