import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

interface Props {
  title: string;
  season_year?: string;
  description?: string;
  className?: string;
}

const Card = ({ title, season_year, description, className }: Props) => {
  return (
    <Link
      href={{ pathname: "/event/[id]", params: { id: title } }}
      className={`${className}  mt-2 mb-5  shadow relative flex flex-col  bg-white`}
    >
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        className="rounded-xl absolute offset-0 -z-10"
      />
      <Text className="text-lg">{title}</Text>
      {description && <Text className="text-sm">{description}</Text>}
      {season_year && (
        <View className="flex-row items-center mt-2 gap-2">
          <View className="flex-row -space-x-2 items-center">
            {Array.from({ length: 4 }, (_, index) => (
              <Image
                key={index}
                source={{ uri: "https://via.placeholder.com/150" }}
                className="w-8 h-8 rounded-full bg-red-300 border border-black"
              />
            ))}
          </View>
          <Text className="text-xs">50+ Players Joined</Text>
        </View>
      )}
    </Link>
  );
};

export default Card;
