import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import AppButton from "./AppButton";

export default function UserInput() {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.inputStyle}>
        <TextInput placeholder="dxd" />
        <AppButton title={"Notify Me"} marginTop={1} />
      </View>
      <Text style={{ marginTop: 8 }}>Don't worry, we wont spam you :)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
  },
  inputStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#0B0B0B",
    height: 45,
    width: 350,
    borderRadius: "30%",
    paddingLeft: 15,
    paddingRight: 5,
    marginTop: 30,
  },
});
