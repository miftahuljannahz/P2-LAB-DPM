import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.centerText}>Miftahul Jannah - 223510890</Text>

      {/* Kontainer untuk kotak dengan tata letak FlexBox */}
      <View style={styles.boxContainer}>
        {/* Kotak 1 */}
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.boxText}>Box 1</Text>
        </View>
        {/* Kotak 2 */}
        <View style={[styles.box, styles.box2]}>
          <Text style={styles.boxText}>Box 2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d3d3d3", // Latar belakang abu-abu terang
  },
  centerText: {
    fontSize: 24, // Ukuran font
    color: "#0000ff", // Warna biru
    fontWeight: "bold", // Teks tebal
    marginBottom: 20, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: "row", // Tata letak horizontal
    justifyContent: "space-between", // Jarak merata di antara kotak
    width: "80%", // Lebar kontainer untuk tata letak kotak
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10, // Opsional: sudut sedikit melengkung
    justifyContent: "center", // Teks di tengah secara vertikal
    alignItems: "center", // Teks di tengah secara horizontal
  },
  box1: {
    backgroundColor: "#ff69b4", // Pink hot untuk Kotak 1
  },
  box2: {
    backgroundColor: "#ffc0cb", // Pink pastel untuk Kotak 2
  },
  boxText: {
    color: "#ffffff", // Warna teks putih
    fontWeight: "bold", // Teks tebal
    fontSize: 16, // Ukuran font
  },
});
