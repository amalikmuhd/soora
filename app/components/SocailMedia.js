import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MediaIcon from "./MediaIcon";

export default function SocailMedia() {
  return (
    <View style={styles.containerStyle}>
      <MediaIcon source={require("../assets/images/facebook.png")} />
      <MediaIcon source={require("../assets/images/twitter.png")} />
      <MediaIcon source={require("../assets/images/instagram.png")} />
      <MediaIcon source={require("../assets/images/tiktok.png")} />
      <MediaIcon source={require("../assets/images/youtube.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 120,
  },
});
