import { Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";

export default function OnboardingItem({ item }) {
  // const { width } = useWindowDimensions();

  return (
    <View style={[styles.container]}>
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <View style={{ flex: 0.3 }}>
        <Image source={item.image} style={[styles.image, { resizeMode: "contain" }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    // flex: 0.2,
    justifyContent: "center",
    alignItems: "flex-start",
    width: 400,
  },

  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },

  description: {
    fontWeight: "300",
    marginBottom: 10,
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  },
});
