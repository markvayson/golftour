import React from "react";
import { FlatList, Text, View } from "react-native";
import SectionTitle from "../SectionTitle";

const EventsJoined = () => {
  return (
    <View className="h-[165px]">
      <SectionTitle title="Events Joined" />
      <View className="h-full mx-5 mt-2">
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({ item, index }) => (
            <View className="flex-row bg-white gap-2 rounded-lg mb-2 pl-2 pr-5 py-2">
              <Text>Event {index + 1}</Text>
              <Text className="flex-1">Format</Text>
              <Text>1st Place</Text>
            </View>
          )}
        />
      </View>
      <View className="pb-32"></View>
    </View>
  );
};

export default EventsJoined;
