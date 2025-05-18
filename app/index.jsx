import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const index = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-pblack">Aora!</Text>
      <Link href="/home" style={{ color: "blue" }}>
        Go To Home
      </Link>
      <StatusBar style="inverted" />
    </View>
  );
};

export default index;
