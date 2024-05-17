import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NextButton = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={"./assets/ws.jpg"}
      <Button title=" " />

      {/* Buttons */}
      <TouchableOpacity
        style={{
          backgroundColor: "#1570EF",
          padding: 20,
          marginTop: 400,
          borderRadius: 15,
        }}
      >
        <Text style={{ fontSize: 30, color: "white" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },

  buttonCont: {
    backgroundColor: "black",
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
    height: 75,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default NextButton;
