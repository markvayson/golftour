import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="leaderboard/[id]"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="user/[id]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
