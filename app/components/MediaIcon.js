import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function MediaIcon({ source }) {
  return (
    <TouchableOpacity style={styles.containerStyle}>
      <Image source={source} style={styles.imageStyle} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    marginRight: 10,
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
});
