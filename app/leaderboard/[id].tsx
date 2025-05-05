import PlayerStatsCard from "@/components/PlayerStatsCard";
import { Rankings } from "@/constants/data";
import { icons } from "@/constants/icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Leaderboard = () => {
  const data = Rankings;
  const [gender, setGender] = useState<"Men" | "Ladies">("Men");
  const router = useRouter();
  const { id, year } = useLocalSearchParams();
  const sortData = [...data].sort((a, b) => b.points - a.points);
  const filterData = sortData.filter((a) => a.gender === gender);
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row items-center mt-5 mb-3 px-5 relative">
        <TouchableOpacity
          onPress={router.back}
          className="absolute z-10 left-5"
        >
          <Image source={icons.backBtn} className="size-5 mr-1 mt-0.5" />
        </TouchableOpacity>
        <Text className="pl-2 flex-1 font-medium text-lg text-center">
          {id} {year}
        </Text>
      </View>
      <View className="flex-row px-5 items-center justify-center gap-5">
        <TouchableOpacity
          onPress={() => setGender("Men")}
          disabled={gender === "Men"}
          className={`${
            gender === "Men" ? "bg-primary" : "hover:underline"
          } px-5 py-2 rounded-full flex-1 items-center `}
        >
          <Text>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setGender("Ladies")}
          disabled={gender === "Ladies"}
          className={`${
            gender === "Ladies" ? "bg-primary" : "hover:underline"
          } px-5 py-2 rounded-full flex-1 items-center hover:underline`}
        >
          <Text>Ladies</Text>
        </TouchableOpacity>
      </View>

      <View className="bg-secondary px-5 rounded-t-2xl flex-1 pt-10 shadow-xs">
        <FlatList
          data={filterData}
          keyExtractor={(item: PlayerStatsCardProps) => item.id.toString()}
          renderItem={({ item, index }) => (
            <PlayerStatsCard {...item} rank={index + 1} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Leaderboard;
