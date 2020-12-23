import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          resizeMode={"contain"}
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        />
        <Text style={styles.tagline}>Sell what you don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          onPress={() => console.log("Login")}
          title="Login"
        ></AppButton>
        <AppButton
          onPress={() => console.log("Register")}
          title="Register"
          color={"secondary"}
        ></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: { padding: 20, width: "100%" },
  tagline: {
    color: colors.black,
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
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
});

export default WelcomeScreen;
