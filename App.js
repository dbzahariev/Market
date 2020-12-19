import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Platform,
  StatusBar,
} from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  const orientation = useDeviceOrientation();

  console.log("orint", orientation);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hi</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
