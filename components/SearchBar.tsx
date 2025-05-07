import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View className="flex-1 flex-row bg-white rounded-lg items-center pl-5 py-2">
      <FontAwesome className="" name="search" size={16} color="#999" />
      <TextInput
        className="rounded-full px-4 py-2 w-full"
        placeholder="Search..."
        placeholderTextColor="#999"
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
};

export default SearchBar;
