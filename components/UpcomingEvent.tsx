import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import SectionTitle from "./SectionTitle";

const UpcomingEvent = () => {
  const router = useRouter();
  return (
    <View className="pb-8">
      <SectionTitle title="Upcoming Events" />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={({ item }) => (
          <View className="h-[350px] bg-white w-[265px] ml-5 my-5 rounded-xl justify-end p-5 gap-2">
            <Text className="text-xl font-medium">Title {item}</Text>
            <Text>Date</Text>
            <Text>Description</Text>
            <Text>Format</Text>
            <View className="flex-row items-center mt-2 gap-2">
              <View className="flex-row items-center">
                {Array.from({ length: 4 }, (_, index) => (
                  <Image
                    key={index}
                    source={{ uri: "https://placehold.co/50x50" }}
                    className={`${
                      index !== 0 && "-ml-2"
                    } w-8 h-8 rounded-full bg-red-300 border border-black`}
                  />
                ))}
              </View>
              <Text>45+ has joined</Text>
            </View>
            <TouchableOpacity
              onPress={() => router.navigate(`/event/${item}`)}
              className="bg-primary rounded-lg text-center py-3 items-center"
            >
              <Text className="font-medium">View Event</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.toString()}
        horizontal={true}
      />
    </View>
  );
};

export default UpcomingEvent;
