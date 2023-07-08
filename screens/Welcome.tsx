import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View className="flex-1 p-6" style={styles.container}>
      <Text className="font-mt_bold text-4xl">
        Welcome to Msaidika Mobile Application.
      </Text>
      <Text className="font-mt_semi mt-4 text-gray-400">
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
  },
});
export default Welcome;
