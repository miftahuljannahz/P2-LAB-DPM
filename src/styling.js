import React from "react";
import { View, StyleSheet, Text } from "react-native";

const StylingExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Hello</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Background color for the container
  },
  box: {
    width: 150, // Width of the box
    height: 150, // Height of the box
    backgroundColor: "lightgreen", // Box color
    margin: 10, // Margin to separate from other elements
    borderRadius: 10, // Rounded corners for the box
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    shadowColor: "#000", // Shadow effect for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4, // Shadow effect for Android
  },
  text: {
    fontSize: 18,
    color: "white", // Text color
    fontWeight: "bold", // Bold text
  },
});

export default StylingExample;