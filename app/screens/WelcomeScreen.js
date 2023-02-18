import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from "react-native";
import AppButton from "../components/AppButton";
import AppTitle from "../components/AppTitle";
import Footer from "../components/Footer";
import HeroImageCard from "../components/HeroImage";
import HeroTitleCard from "../components/HeroTitleCard";
import Modal from "../components/Modal";
import TopHeader from "../components/TopHeader";
import SocailMedia from "../components/SocailMedia";
import UserInput from "../components/UserInput";

export default function WelcomeScreen() {
  const { height, width } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      {showModal && <Modal setShow={setShowModal} />}
      <ScrollView>
        <View style={styles.container}>
          <View style={{ flex: 1, height: height * 2, width: width }}>
            <SafeAreaView style={styles.container}>
              <StatusBar />
              <TopHeader onPress={() => setShowModal(!showModal)} />
              <HeroTitleCard />
              <HeroImageCard src={require("../assets/images/landing-image-2.png")} />
              <AppTitle title="Coming Soon" tag1="Get Notified" tag2="When We Launch" />
              <UserInput />
              <HeroImageCard src={require("../assets/images/landing-image-1.png")} />
              <SocailMedia />
              <Footer />
            </SafeAreaView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? SafeAreaView.currentHeight : 0,
  },
});
