import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";

const HeroTitleCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View style={styles.firstRowFirstItem} />
        <Text style={styles.textStyle}>Coming Soon</Text>
      </View>
      <Text style={styles.textHeaderStyle}>Bringing{"\n"} Muslims Together</Text>
      <View style={styles.thirdRow}>
        <Image
          source={require("../assets/images/google-play.png")}
          style={[styles.downloadAppImageStyle, styles.itemRight]}
        />
        <Image source={require("../assets/images/apple-store.png")} style={styles.downloadAppImageStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  firstRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  firstRowFirstItem: {
    backgroundColor: "#000000",
    height: 1,
    width: 17,
    marginRight: 10,
  },

  textStyle: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,
    display: "flex",
    alignItems: "flex-end",
    color: "#0B0B0B",
  },
  textHeaderStyle: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 36,
    lineHeight: 44,
    display: "flex",
    alignItems: "flex-end",
    color: "#0B0B0B",
    textAlign: "center",
    marginTop: 8,
  },

  thirdRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
    gap: 10,
  },

  itemRight: {
    marginRight: 10,
  },

  downloadAppImageStyle: { height: 38.8, width: 134.19 },
});

export default HeroTitleCard;
