import { View, Image, StyleSheet } from "react-native";
import React from "react";
import AppButton from "./AppButton";

const TopHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} style={{ height: 15.82, width: 74 }} />
      <AppButton title={"Contact"} marginTop={2} leadingIcon={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default TopHeader;
