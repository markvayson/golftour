import React from "react";
import { Text, View } from "react-native";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <View className="py-2 px-5">
      <Text className="font-medium text-lg">{title}</Text>
    </View>
  );
};

export default SectionTitle;
