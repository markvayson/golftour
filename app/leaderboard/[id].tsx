import PlayerStatsCard from "@/components/PlayerStatsCard";
import { icons } from "@/constants/icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data: PlayerStatsCardProps[] = [
  {
    id: 1,
    name: "Player 1",
    nickname: "Ace",
    gross: 83,
    hcp: 15,
    net: 68,
    points: 36,
    gender: "Men",
  },
  {
    id: 2,
    name: "Player 2",
    nickname: "Birdie",
    gross: 82,
    hcp: 12,
    net: 70,
    points: 34,
    gender: "Ladies",
  },
  {
    id: 3,
    name: "Player 3",
    nickname: "Eagle",
    gross: 75,
    hcp: 10,
    net: 65,
    points: 38,
    gender: "Men",
  },
  {
    id: 4,
    name: "Player 4",
    nickname: "Fairway",
    gross: 90,
    hcp: 18,
    net: 72,
    points: 33,
    gender: "Ladies",
  },
  {
    id: 5,
    name: "Player 5",
    nickname: "Chip",
    gross: 75,
    hcp: 9,
    net: 66,
    points: 37,
    gender: "Men",
  },
  {
    id: 6,
    name: "Player 6",
    nickname: "Putter",
    gross: 94,
    hcp: 20,
    net: 74,
    points: 31,
    gender: "Ladies",
  },
  {
    id: 7,
    name: "Player 7",
    nickname: "Drive",
    gross: 78,
    hcp: 11,
    net: 67,
    points: 35,
    gender: "Men",
  },
  {
    id: 8,
    name: "Player 8",
    nickname: "Slice",
    gross: 83,
    hcp: 14,
    net: 69,
    points: 36,
    gender: "Ladies",
  },
  {
    id: 9,
    name: "Player 9",
    nickname: "Hook",
    gross: 81,
    hcp: 13,
    net: 68,
    points: 37,
    gender: "Men",
  },
  {
    id: 10,
    name: "Player 10",
    nickname: "Lag",
    gross: 88,
    hcp: 17,
    net: 71,
    points: 32,
    gender: "Ladies",
  },
];

const Leaderboard = () => {
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
