import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { images } from "../constants";

const index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <StatusBar backgroundColor="#161622" style="light" />

      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full max-h-[90vh] items-center justify-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="font-bold text-3xl text-center text-white">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[55px] h-[15px] absolute right-[34px] bottom-[-3px]"
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray-100 font-pregular text-center mt-7 text-[14px]">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/signIn")}
            containerStyles="mt-8"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
