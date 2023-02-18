import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Footer() {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Copyright © 2022 Soora. All rights reserved</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: 16,
    borderTopColor: "#1E1E1E",
    borderTopWidth: 1,
    paddingVertical: 18,
    marginTop: 16,
  },
  textStyle: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14.53,
    color: "#0B0B0B",
  },
});
