import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";

interface Props {
  seriesName: string;
  series: string;
  id: string;
}

const LeaderboardCard = ({ id, series, seriesName }: Props) => {
  return (
    <Link
      href={{
        pathname: "/leaderboard/[id]",
        params: { id: seriesName, year: series },
      }}
      asChild
    >
      <Text>
        {seriesName} {series}
      </Text>
    </Link>
  );
};

export default LeaderboardCard;
