import PlayerStatsCard from "@/components/PlayerStatsCard";
import { icons } from "@/constants/icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const data: PlayerStatsCardProps[] = [
  {
    id: 1,
    name: "Player 1",
    score: 100,
  },
  {
    id: 2,
    name: "Player 2",
    score: 200,
  },
  {
    id: 3,
    name: "Player 3",
    score: 300,
  },
  {
    id: 4,
    name: "Player 4",
    score: 100,
  },
  {
    id: 5,
    name: "Player 5",
    score: 200,
  },
  {
    id: 6,
    name: "Player 6",
    score: 300,
  },
];

const Leaderboard = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const sortData = data.sort((a, b) => b.score - a.score);
  return (
    <View className="flex-1">
      <View className="flex-row items-center mt-5 mb-3 px-5">
        <TouchableOpacity onPress={router.back}>
          <Image source={icons.backBtn} className="size-5 mr-1 mt-0.5" />
        </TouchableOpacity>
        <Text className="pl-2 flex-1 font-medium text-lg">{id}</Text>
      </View>
      <View>
        {" "}
        <FlatList
          data={sortData.slice(0, 3)}
          keyExtractor={(item: PlayerStatsCardProps) => item.id.toString()}
          renderItem={({ item, index }) => <View>{item.name}</View>}
        />
      </View>
      <View className="bg-[#F1F5E8] px-5 rounded-t-2xl flex-1 pt-2">
        <FlatList
          data={sortData.slice(3)}
          keyExtractor={(item: PlayerStatsCardProps) => item.id.toString()}
          renderItem={({ item, index }) => (
            <PlayerStatsCard {...item} rank={index + 1} />
          )}
        />
      </View>
    </View>
  );
};

export default Leaderboard;
