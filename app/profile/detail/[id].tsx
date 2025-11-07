import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const DetailTest = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>DetailTest id: {id}</Text>
    </View>
  );
};

export default DetailTest;
