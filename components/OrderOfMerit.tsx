import { ordinal } from "@/lib/ordinal";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import SectionTitle from "./SectionTitle";

const OrderOfMerit = () => {
  const [gender, setGender] = useState("Men");
  const router = useRouter();
  return (
    <View className="pb-8">
      <View className="flex-row items-center">
        <SectionTitle title="Order of Merit" />
        <View className=" flex-row gap-2 items-center flex-1">
          <TouchableOpacity
            disabled={gender === "Men"}
            onPress={() => setGender("Men")}
            className={`${
              gender === "Men" && "bg-primary rounded-lg"
            } px-2 py-1`}
          >
            <Text className=" font-medium">Men</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={gender === "Ladies"}
            onPress={() => setGender("Ladies")}
            className={`${
              gender === "Ladies" && "bg-primary rounded-lg"
            } px-2 py-1`}
          >
            <Text className=" font-medium">Ladies</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="px-5"
          onPress={() => router.navigate("/leaderboard/order-of-merit")}
        >
          <Text className=" font-medium">View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => router.navigate(`/user/${item}`)}
            className="w-[265px] ml-5 my-5    relative  flex-row items-center"
          >
            <View className="items-center rounded-lg py-2 font-black px-2 ">
              <Text className="font-bold">{ordinal(index + 1)}</Text>
              <Text className="text-sm">Place</Text>
            </View>
            <View className="bg-white flex-row items-center gap-2 flex-1 py-3 p-3 rounded-xl">
              <Image
                source={{ uri: "https://placehold.co/50x50" }}
                className="w-10 h-10 rounded-lg bg-red-300 border-black border"
              />

              <Text className="flex-1 text-lg font-medium line-clamp-1">
                Mark Vayson
              </Text>
              <View className=" items-center">
                <Text className="font-bold">100</Text>
                <Text className="text-sm">Points</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.toString()}
        horizontal={true}
      />
    </View>
  );
};

export default OrderOfMerit;
