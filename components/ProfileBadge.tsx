import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { View } from "react-native";

interface Props {
  profile: boolean;
}

const ProfileBadge = ({ profile }: Props) => {
  if (!profile)
    return (
      <View className="bg-white w-12 h-12 flex items-center justify-center rounded-lg">
        <FontAwesome name="user" size={24} color="#000" />
      </View>
    );
};

export default ProfileBadge;
