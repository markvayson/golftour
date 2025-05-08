import HandicapList from "@/components/HandicapList";
import OrderOfMerit from "@/components/OrderOfMerit";
import ProfileBadge from "@/components/ProfileBadge";
import SearchBar from "@/components/SearchBar";
import UpcomingEvent from "@/components/UpcomingEvent";
import { useRouter } from "expo-router";
import { SafeAreaView, ScrollView, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const profile = false;
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <ScrollView className=" ">
        <View className="flex-row items-center justify-between p-5 gap-5 pb-8">
          <SearchBar />
          <ProfileBadge profile={profile} />1{" "}
        </View>
        <OrderOfMerit />
        <UpcomingEvent />
        <HandicapList />
        <View className="pb-32"></View>
      </ScrollView>
    </SafeAreaView>
  );
}
