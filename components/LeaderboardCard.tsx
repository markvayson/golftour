import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";

interface Props {
  name: string;
}

const LeaderboardCard = ({ name }: Props) => {
  return (
    <Link href={`/leaderboard/${name}`} asChild>
      <Text>{name}</Text>
    </Link>
  );
};

export default LeaderboardCard;
