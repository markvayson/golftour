import LeaderboardCard from "@/components/LeaderboardCard";
import { FlatList, Text, View } from "react-native";

const data = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Alice Johnson" },
  { id: "4", name: "Bob Brown" },
  { id: "5", name: "Charlie Davis" },
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
