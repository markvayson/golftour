import { ordinal } from "@/lib/ordinal";
import React from "react";
import { FlatList, Image, Text, View } from "react-native";

const OrderOfMerit = () => {
  return (
    <View className="pb-32">
      <Text className="font-medium text-xl px-5">Order of Merit</Text>
      <View className="flex-row h-[240px]">
        <View className="basis-1/2 px-5">
          <Text className="font-medium ">Men Top 10</Text>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item, index }) => (
              <View className="my-2 rounded-xl  flex-row items-center gap-2 bg-white p-2">
                <Text className="font-medium text-xs w-6">
                  {ordinal(index + 1)}
                </Text>
                <Image
                  source={{ uri: "https://via.placeholder.com/150" }}
                  className="bg-gray-200 w-8 h-8 rounded-full "
                />
                <Text>Full Name</Text>
              </View>
            )}
            keyExtractor={(item) => item.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View className="basis-1/2 px-5">
          <Text className="font-medium">Ladies Top 10</Text>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            renderItem={({ item, index }) => (
              <View className=" my-2 rounded-xl  flex-row items-center gap-2 bg-white p-2">
                <Text className="font-medium">{ordinal(index + 1)}</Text>
                <Image
                  source={{ uri: "https://via.placeholder.com/150" }}
                  className="bg-gray-200 w-8 h-8 rounded-full "
                />
                <Text>Full Name</Text>
              </View>
            )}
            keyExtractor={(item) => item.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default OrderOfMerit;
