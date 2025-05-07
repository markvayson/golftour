import Card from "@/components/Card";
import OrderOfMerit from "@/components/OrderOfMerit";
import SectionTitle from "@/components/SectionTitle";
import { getAllEvents } from "@/lib/appwrite";
import useFetch from "@/lib/useFetch";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
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
      <SafeAreaView className="flex-1">
        <ScrollView className="flex flex-1  font-bold ">
          <View className="flex-row px-5 pb-5 pt-2 justify-between items-center">
            <FontAwesome
              className=" border rounded-full w-6 h-6 flex items-center justify-center"
              name="user"
              size={14}
              color="black"
              onPress={() => router.navigate("/profile")}
            />
            <View className="flex-row gap-2 items-center">
              <FontAwesome
                className=" rounded-full w-6 h-6 flex items-center justify-center"
                name="bell"
                size={16}
                color="black"
                onPress={() => router.navigate("/profile")}
              />
              <FontAwesome
                className=" rounded-full w-6 h-6 flex items-center justify-center"
                name="gear"
                size={16}
                color="black"
                onPress={() => router.navigate("/profile")}
              />
            </View>
          </View>
          <View>
            <SectionTitle title="Today's Event" />
            <Card title="Al Ain Par 3 Series" className="mx-5" />
          </View>
          <View>
            <SectionTitle title="Events Joined" />
          </View>

          <View className="">
            <SectionTitle title="Upcoming Events" />
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Card
                  title={item.title}
                  season_year={item.season_year}
                  description={item.description}
                  className="h-[350px] ml-5"
                />
              )}
              keyExtractor={(item) => item.$id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
            />
          </View>
          <View className="">
            <SectionTitle title="Event Result" />
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Card
                  title={item.title}
                  season_year={item.season_year}
                  description={item.description}
                  className="h-[350px] ml-5"
                />
              )}
              keyExtractor={(item) => item.$id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={true}
            />
          </View>
          <OrderOfMerit />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
