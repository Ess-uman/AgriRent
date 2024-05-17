
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  buttonCont: {
    backgroundColor: "#5AE4A8",
    borderRadius: 15,
    padding: 20,
    marginTop: 200,
    height: 70,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 210,
    height: 210,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 30,
    color: "white",
  },
});

const NextButton = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/welcomelogo.jpg")} />
      <TouchableOpacity style={styles.buttonCont}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;
