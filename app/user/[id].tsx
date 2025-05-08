import AboutDetails from "@/components/user-profile/AboutDetails";
import EventsJoined from "@/components/user-profile/EventsJoined";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const User = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView>
        <View className="flex-1 items-center justify-center relative py-5 ">
          <TouchableOpacity
            onPress={router.back}
            className="absolute z-10 left-5 top-5"
          >
            <FontAwesome name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <View className="items-center justify-center gap-5">
            <Image
              source={{ uri: `https://picsum.photos/id/${id}/200/200` }}
              className="w-40 h-40 rounded-full"
            />
            <Text className="text-lg font-medium">User Name</Text>
          </View>
        </View>
        <View className="px-5 flex-row items-center gap-5 justify-center pb-8">
          <View className="bg-white p-2 rounded-lg items-center flex-1">
            <Text className="text-xs">O.O.M Rank</Text>
            <Text className="text-lg font-medium">1st</Text>
          </View>
          <View className="bg-white p-2 rounded-lg items-center flex-1">
            <Text className="text-xs">Handicap</Text>
            <Text className="text-lg font-medium">0.5</Text>
          </View>
          <View className="bg-white p-2 rounded-lg items-center flex-1">
            <Text className="text-xs">Events Joined</Text>
            <Text className="text-lg font-medium">1st</Text>
          </View>
        </View>
        <AboutDetails />
        <EventsJoined />
      </ScrollView>
    </SafeAreaView>
  );
};

export default User;
