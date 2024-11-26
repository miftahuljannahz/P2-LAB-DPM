import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FontExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
      <Text style={styles.largeText}>This is a larger text.</Text>
      <Text style={styles.redText}>This text is red and italic.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Background color
    padding: 20, // Padding around the screen
  },
  text: {
    fontSize: 20,
    color: '#333333', // Dark gray color for modern look
  },
  largeText: {
    fontSize: 30,
    fontWeight: 'bold', // Corrected 'fontweight' to 'fontWeight'
    color: '#007BFF', // Blue color for larger text
    marginTop: 15, // Spacing between texts
  },
  redText: {
    fontSize: 18,
    color: 'red', // Red color
    fontStyle: 'italic', // Italic style
    textDecorationLine: 'underline', // Underlined text
    marginTop: 15, // Spacing between texts
  },
});

export default FontExample;