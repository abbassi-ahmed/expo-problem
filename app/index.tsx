import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const generateRandomId = () => {
    return Math.floor(100 + Math.random() * 900).toString();
  };

  const handleGoToDetail = () => {
    const randomId = generateRandomId();
    router.push(`/profile/detail/${randomId}`);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Pressable onPress={handleGoToDetail}>
        <Text style={{ color: "blue", marginTop: 20 }}>Quick action</Text>
      </Pressable>
    </View>
  );
}
