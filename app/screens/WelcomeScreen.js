import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          resizeMode={"contain"}
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        />
        <Text style={{ color: colors.black }}>Sell what you don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
