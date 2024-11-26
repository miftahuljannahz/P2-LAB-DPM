
import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const DimensionExample = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Window Width: {windowWidth.toFixed(2)}</Text>
        <Text style={styles.text}>Window Height: {windowHeight.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Background color for aesthetics
  },
  box: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 10, // Rounded corners for the box
    alignItems: 'center', // Center text within the box
  },
  text: {
    fontSize: 16,
    color: 'darkblue', // Visible text color
    marginBottom: 5, // Space between texts
  },
});

export default DimensionExample;