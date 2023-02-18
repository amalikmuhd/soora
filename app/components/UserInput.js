import { ActivityIndicator, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import AppButton from "./AppButton";

export default function UserInput() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // submit
  const handle = () => {
    if (email.trim()) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 3000);
    }
    console.log(email);
  };

  // Hide success message and clearn input value
  const hide = () => {
    setTimeout(() => {
      setEmail("");
      // setSuccess(false);
    }, 3000);
  };

  return loading ? (
    <ActivityIndicator size="large" style={styles.loadingContainer} />
  ) : (
    <View style={styles.containerStyle}>
      <View style={styles.inputStyle}>
        <TextInput onChangeText={setEmail} value={email} placeholder="please enter your email here" />
        <AppButton
          title={"Notify Me"}
          marginTop={1}
          onPress={() => {
            handle();
            setTimeout(() => {
              hide();
            }, 3000);
          }}
        />
      </View>
      {success && <Text style={styles.successMessageStyle}>Your email address has been received.</Text>}
      <Text style={styles.titleStyle}>Don't worry, we won't spam you :)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
    height: 100,
  },
  loadingContainer: {
    height: 100,
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

  successMessageStyle: {
    color: "#3B5998",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 14.52,
    marginTop: 8,
  },
  titleStyle: {
    color: "#0B0B0B",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 14.52,
    marginTop: 8,
  },
});
