import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Events = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default Events;
