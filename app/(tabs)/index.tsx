import LeaderboardCard from "@/components/LeaderboardCard";
import { getAllEvents } from "@/lib/appwrite";
import useFetch from "@/lib/useFetch";
import { FlatList, Text, View } from "react-native";

export default function Index() {
  const { data, loading, error } = useFetch(getAllEvents);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  console.log("data", data);
  if (data) {
    if (data.length === 0) {
      return <Text>No events found</Text>;
    }
    return (
      <View className=" flex-1">
        <View className="px-5 py-2 font-bold ">
          <Text>Leaderboards</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <LeaderboardCard
                title={item.title}
                season_year={item.season_year}
                description={item.description}
              />
            )}
            keyExtractor={(item) => item.$id.toString()}
          />
        </View>
      </View>
    );
  }
}
