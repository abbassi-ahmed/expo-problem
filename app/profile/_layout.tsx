import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Index" }} />
      <Stack.Screen name="detail/[id]" options={{ title: "Detail" }} />
    </Stack>
  );
}
