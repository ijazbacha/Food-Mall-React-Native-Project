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
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.droidSafeArea}>
        <View>
          <Home />
        </View>
      </SafeAreaView>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
