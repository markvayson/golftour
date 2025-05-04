import LeaderboardCard from "@/components/LeaderboardCard";
import { FlatList, Text, View } from "react-native";

const data = [
  { id: "1", series: "2024-2025", seriesName: "Al Ain Par 3 Series" },
  { id: "2", series: "2024-2025", seriesName: "Al Ain Par 3 Series" },
  { id: "3", series: "2025-2026", seriesName: "Al Ain Par 3 Series" },
  { id: "4", series: "2025-2026", seriesName: "Al Ain Par 3 Series" },
  { id: "5", series: "2026-2027", seriesName: "Al Ain Par 3 Series" },
  { id: "6", series: "2026-2027", seriesName: "Al Ain Par 3 Series" },
];

export default function Index() {
  return (
    <View className=" flex-1">
      <View className="px-5 py-2 font-bold ">
        <Text>Leaderboards</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <LeaderboardCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}
