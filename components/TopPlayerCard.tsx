import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const TopPlayerCard = ({
  nickname,
  rank,
  gross,
  net,
  points,
}: PlayerStatsCardProps) => {
  return (
    <View
      className={`${
        rank === 1 ? "order-2" : rank === 2 ? "order-1" : "order-3"
      } flex-1 items-center justify-center h-52 relative`}
    >
      <Link
        href={{ pathname: `/user/[id]`, params: { id: nickname } }}
        className={`absolute flex-col flex ${rank === 1 ? "top-4" : "top-8"}`}
      >
        <View className="rounded-full items-center justify-center relative">
          <Image
            source={{ uri: "https://placehold.co/50" }}
            className="w-24 h-24 rounded-full border-4 border-primary"
          />
          <Text className="absolute -bottom-2 font-bold bg-primary rounded-full px-2 py-1">
            {rank}
          </Text>
        </View>
        <View className="pt-4 items-center">
          <Text className="font-bold">{nickname}</Text>
          <View className="flex-row gap-2">
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

export default TopPlayerCard;
