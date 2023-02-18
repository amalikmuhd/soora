import { View, Image, StyleSheet } from "react-native";
import React from "react";
import AppButton from "./AppButton";

type TopHeaderProps = {
  child: React.ReactChild;
};

const TopHeader = (props: TopHeaderProps) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} style={{ height: 15.82, width: 74 }} />
      {props.child}
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
