import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View style={styles.container} className="flex-1 p-6">
      <Text className="font-bold text-5xl">
        Welcome to Msaidika Mobile Application.
      </Text>
      <Text>
        Discover, connect, and thrive with M-Saidika. Simplify your local life
        and tap into a world of convenience. Order food, book transportation,
        find jobs and houses effortlessly. Access emergency services and connect
        with counselors whenever you need assistance. M-Saidika: empowering
        residents, transforming communities.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    fontFamily: "arial",
  },
});
export default Welcome;
