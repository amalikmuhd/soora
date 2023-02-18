import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

type AppButtonProps = {
  title: string;
  onPress: any;
  marginTop: number;
  leadingIcon: boolean;
};
export default function AppButton(props: AppButtonProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...styles.button,
        marginTop: props.marginTop ? props.marginTop : 0,
      }}
    >
      <Text
        style={{
          ...styles.text,
        }}
      >
        {props.title}
      </Text>

      {props.leadingIcon && (
        <Image
          source={require("../assets/images/contact-icon.png")}
          style={{ width: 10, marginLeft: 8 }}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 36,
    backgroundColor: "#0B0B0B",
  },

  text: {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 15,
    color: "#fff",
  },
});
