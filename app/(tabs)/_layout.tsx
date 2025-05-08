import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 52,
          position: "absolute",
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="rankings"
        options={{
          title: "Rankings",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="trophy" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cog" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
