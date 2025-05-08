import React from "react";
import { FlatList, Text, View } from "react-native";
import SectionTitle from "./SectionTitle";

const HandicapList = () => {
  return (
    <View>
      <SectionTitle title="Handicap List" />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={({ item }) => (
          <View className="flex-row bg-white gap-2 rounded-lg mb-2 pl-2 pr-5 py-2">
            <Text>Event {item}</Text>
            <Text className="flex-1">Format</Text>
            <Text>1st Place</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HandicapList;
