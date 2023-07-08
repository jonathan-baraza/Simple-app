import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View
      className="flex-1 p-6 flex-col justify-between"
      style={styles.container}
    >
      <View>
        <Text className="font-mt_bold text-4xl mt-4 leading-10">
          Welcome to Msaidika Mobile Application.
        </Text>
        <Text
          style={{ lineHeight: 22 }}
          className="font-mt_mid mt-8 text-xm text-gray-400"
        >
          Simplify local life with M-Saidika. Order, connect, and thrive
          effortlessly. Access services, find jobs and houses, and get emergency
          assistance. Empowering residents, transforming communities.
        </Text>
      </View>
      <View className="w-full">
        <TouchableOpacity
          activeOpacity={0.5}
          className="w-full bg-[#007acc] p-3 rounded-lg flex items-center justify-center "
        >
          <Text className="text-white">Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});
export default Welcome;
