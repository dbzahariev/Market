import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

function ListeningDetailScreen(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      {/* <Card
        title="Red Jacket for sale"
        subTitle="$100"
        image={require("../assets/jacket.jpg")}
      />
      <Card
        title="Couch in great condition"
        subTitle="$900"
        image={require("../assets/couch.jpg")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  detailContainer: { padding: 20 },
  image: {
    width: "100%",
    height: 300,
  },
  title: { fontSize: 24, fontWeight: "500" },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default ListeningDetailScreen;
