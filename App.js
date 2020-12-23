import React from "react";
import { StyleSheet } from "react-native";

import ListeningDetailScreen from "./app/screens/ListeningDetailScreen";

export default function App() {
  return <ListeningDetailScreen />;

  // return (
  //   <View
  //     style={}
  //   ></View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
