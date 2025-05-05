import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";

const LeaderboardCard = ({
  title,
  season_year,
  description,
}: EventSeriesProps) => {
  return (
    <Link
      href={{
        pathname: "/leaderboard/[id]",
        params: { id: title, year: season_year },
      }}
      asChild
    >
      <Text>
        {title} {season_year}
      </Text>
    </Link>
  );
};

export default LeaderboardCard;
