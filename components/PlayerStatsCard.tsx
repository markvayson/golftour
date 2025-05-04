import React from "react";
import { Image, Text, View } from "react-native";

const PlayerStatsCard = ({ id, name, score, rank }: PlayerStatsCardProps) => {
  return (
    <View className="px-5 mb-2 rounded-xl bg-white flex-row items-center justify-between py-3">
      <View className="flex-row items-center gap-3">
        <Text className="font-bold text-lg">{rank}</Text>
        <Image
          source={{ uri: "https://via.placeholder.com/50x50" }}
          className="w-10 h-10 rounded-full bg-gray-200"
        />
        <Text className="font-medium">{name}</Text>
      </View>
      <Text className="text-lg">{score}pts</Text>
    </View>
  );
};

export default PlayerStatsCard;
