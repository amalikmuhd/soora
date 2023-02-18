import { Clipboard, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import ToastManager, { Toast } from "toastify-react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Modal({ setShow }) {
  const [showModal] = useState(true);

  const copyToClipboard = () => {
    Clipboard.setString("sooratheapp@gmail.com");
  };

  const handlePress = () => {
    copyToClipboard();
    Toast.success("Copied to clipboard", "top");
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const { height, width } = useWindowDimensions();
  return (
    showModal && (
      <View style={{ ...styles.containerStyle, width: width, height: height }}>
        <ToastManager />
        <View style={{ ...styles.miniContainer, width: width / 1.1 }}>
          <View>
            <Text style={styles.titleStyle}>Reach out to use through</Text>
            <View style={styles.emailContainerStyle}>
              <Text style={styles.emailStyle}>sooratheapp@gmail.com</Text>
              <TouchableOpacity style={styles.copyIconContainer} onPress={() => handlePress()}>
                <MaterialIcons name="content-copy" size={14} color="#A6A6A6" />
                <Text style={styles.copyIconText}>copy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0, 0.4)",
    width: "80%",
    zIndex: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  miniContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    height: 135,
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titleStyle: {
    fontWeight: "400",
    color: "#1E1E1E",
    fontSize: 12,
    lineHeight: 15,
  },

  emailContainerStyle: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },

  emailStyle: {
    marginRight: 16,
    fontWeight: "600",
    color: "#3B5998",
    fontSize: 14,
    lineHeight: 17,
  },
  copyIconContainer: {
    alignItems: "center",
  },
  copyIconText: {
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 12.1,
    color: "#0B0B0B",
  },
});
