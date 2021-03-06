import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListeningDetailScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Mosh Hamedani"
            subTitle="5 Listings"
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: { marginVertical: 40 },
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
