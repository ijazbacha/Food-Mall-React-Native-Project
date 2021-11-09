import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";
import Home from "./Screens/Home";

export default function App() {
  return (
    <View style={styles.droidSafeArea}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
