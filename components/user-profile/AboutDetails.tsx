import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SectionTitle from "../SectionTitle";

const AboutDetails = () => {
  const [more, seeMore] = useState<boolean>(false);
  return (
    <View className="gap-2 pb-8">
      <SectionTitle title="About Me" />
      <View className="mx-5 p-2 bg-white">
        <Text className={`${more === false && "line-clamp-2"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In facere hic
          nulla perspiciatis nesciunt maxime doloremque? Autem mollitia sint
          quaerat minima fuga velit doloremque, nihil, est eligendi, esse natus
          dolores.
        </Text>
        <TouchableOpacity
          onPress={() => seeMore(!more)}
          className="w-fit items-end justify-end"
        >
          <Text className="text-sm text-blue-500">
            {more === false ? "See More" : "See Less"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AboutDetails;
