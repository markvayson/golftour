import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const PlayerStatsCard = ({
  nickname,
  points,
  rank,
  gross,
  net,
}: PlayerStatsCardProps) => {
  return (
    <View className="px-2 mb-2">
      <Link href={{ pathname: "/user/[id]", params: { id: nickname } }}>
        <View className="flex-row items-center justify-between py-3 px-4 rounded-xl bg-white w-full">
          <View className="flex-row items-center gap-3">
            <Text className="font-bold text-lg">{rank}</Text>
            <Image
              source={{ uri: "https://via.placeholder.com/50x50" }}
              className="w-10 h-10 rounded-full bg-gray-200"
            />
            <Text className="font-medium">{nickname}</Text>
          </View>
          <View className="flex-row gap-5 ">
            <View className="items-center">
              <Text className="text-lg">{gross}</Text>
              <Text className="text-xs text-gray-500">Gross</Text>
            </View>
            <View className="items-center">
              <Text className="text-lg">{net}</Text>
              <Text className="text-xs text-gray-500">Net</Text>
            </View>
            <View className="items-center">
              <Text className="text-lg">{points}</Text>
              <Text className="text-xs text-gray-500">Points</Text>
            </View>
          </View>
        </View>
      </Link>
    </View>
  );
};

export default PlayerStatsCard;
