import { Image, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";

const HeroImageCard = ({ src }) => {
  const { width, height } = useWindowDimensions();
  return <Image source={src} style={[styles.image, { width: width, height: height / 2, resizeMode: "contain" }]} />;
};

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    marginBottom: 40,
    // flex: 1,
    justifyContent: "center",
    // width: 400,
    // height: 359.64,
  },
});

export default HeroImageCard;
