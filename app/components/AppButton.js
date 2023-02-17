import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
export default function AppButton({
  title,
  onPress,
  textColor,
  marginTop,
  leadingIcon,
  textTransform,
  borderColor,
  borderWidth,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.button,
        marginTop: marginTop ? marginTop : "",
        borderWidth: borderWidth ? borderWidth : "",
        borderColor: borderColor ? borderColor : "",
      }}
    >
      <Text
        style={{
          ...styles.text,
          color: textColor ? textColor : "white",
          textTransform: !textTransform ? "none" : "uppercase",
        }}
      >
        {title}
      </Text>

      {leadingIcon && (
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
    // position: "absolute",
    // right: 2,
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
  },
});
