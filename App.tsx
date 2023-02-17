import WelcomeScreen from "./app/screens/WelcomeScreen";
// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   "Inter-bold": require("./app/assets/fonts/Inter-Bold.ttf"),
  //   "Inter-SemiBold": require("./app/assets/fonts/Inter-SemiBold.ttf"),
  //   "Inter-Medium": require("./app/assets/fonts/Inter-Medium.ttf"),
  //   "Inter-Regular": require("./app/assets/fonts/Inter-Regular.ttf"),
  // });
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }
  return <WelcomeScreen />;
}
