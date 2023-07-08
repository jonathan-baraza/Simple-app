import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Register from "./screens/auth/Register";
import Welcome from "./screens/Welcome";

//setting up fonts
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  return (
    <View className="flex-1">
      <Welcome />
    </View>
  );
}
