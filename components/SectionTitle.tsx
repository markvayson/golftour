import React from "react";
import { Text } from "react-native";

const SectionTitle = ({ title }: { title: string }) => {
  return <Text className="text-xl font-bold px-5">{title}</Text>;
};

export default SectionTitle;
