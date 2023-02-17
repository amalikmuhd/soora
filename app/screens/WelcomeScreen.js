import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  useWindowDimensions,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import AppButton from "../components/AppButton";
import AppTitle from "../components/AppTitle";
import HeroImageCard from "../components/HeroImage";
import HeroTitleCard from "../components/HeroTitleCard";
import TopHeader from "../components/TopHeader";
import onBoardData from "../data/onBoardData";

export default function WelcomeScreen() {
  const { height, width } = useWindowDimensions();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ flex: 1, height: height * 2, width: width }}>
          <SafeAreaView style={styles.container}>
            <TopHeader />
            <HeroTitleCard />
            <HeroImageCard />
            <AppTitle title="Coming Soon" tag1="Get Notified" tag2="When We Launch" />
            <View style={styles.inputStyle}>
              <TextInput placeholder="Placeescsadfcs sdfdsdfs" />
              <AppButton title={"Notify Me"} marginTop={1} />
            </View>
            <HeroImageCard />
          </SafeAreaView>
        </View>
      </View>
      {/* <View style={{ flex: 1, height: 700, width: width }}>
        <SafeAreaView style={{ ...styles.container }}>
          <AppTitle title="Coming Soon" tag1="Get Notified" tag2="When We Launch" />

          <View style={styles.inputStyle}>
            <TextInput placeholder="Placeescsadfcs sdfdsdfs" />
            <AppButton title={"Notify Me"} marginTop={1} />
          </View>

          <HeroImageCard />
          <View style={styles.inputStyle}>
            <TextInput placeholder="Placeescsadfcs sdfdsdfs" />
            <AppButton title={"Notify Me"} marginTop={1} />
          </View>
        </SafeAreaView>
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    // backgroundColor: "#fff",
    // backgroundColor: "purple",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? SafeAreaView.currentHeight : 0,
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

{
  /* <ScrollView>
<View style={styles.container}>
  <TopHeader />
  <HeroTitleCard />
  <HeroImageCard />
  <AppTitle title="Coming Soon" tag1="Get Notified" tag2="When We Launch" />
  <HeroImageCard />
  <HeroImageCard />
  <HeroImageCard />
  <HeroImageCard />
  <StatusBar style="auto" />
</View>
</ScrollView> */
}
