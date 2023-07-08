import { View, Text, Image, TextInput } from "react-native";
import React from "react";

const Register = () => {
  return (
    <View className="flex-col items-center px-6">
      <View className="w-3/4 flex-col items-center ">
        <Image
          resizeMode="contain"
          className="w-full"
          source={require("../../assets/logo2.png")}
        />
        <Text className="text-2xl font-bold">SIGN UP</Text>
      </View>
      <View className="w-full mt-6 space-y-4">
        <TextInput
          inputMode="email"
          placeholder="Email"
          className="border border-gray-200 py-2 px-6 rounded-2xl w-full"
        />
        <TextInput
          inputMode="tel"
          keyboardType="numeric"
          placeholder="Phone"
          className="border border-gray-200 py-2 px-6 rounded-2xl w-full"
        />
        <TextInput
          inputMode="text"
          secureTextEntry={true}
          placeholder="Password"
          className="border border-gray-200 py-2 px-6 rounded-2xl w-full"
        />
        <TextInput
          inputMode="text"
          secureTextEntry={true}
          placeholder="Confirm Password"
          className="border border-gray-200 py-2 px-6 rounded-2xl w-full"
        />
      </View>
    </View>
  );
};

export default Register;
