import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { images } from "../../constants";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[100vh] justify-center px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="text-white font-psemibold text-2xl text mt-10">
            Log In
          </Text>

          <FormField
            label="Email"
            value={form.email}
            placeholder="Enter your email"
            handleChangeValue={(e) => {
              setForm({ ...form, email: e });
            }}
            customStyles="mt-9"
            keyboardType="email-address"
          />

          <FormField
            label="Password"
            value={form.password}
            placeholder="Enter your password"
            handleChangeValue={(e) => {
              setForm({ ...form, password: e });
            }}
            customStyles="mt-7"
          />

          <Text className="text-gray-100 mt-5 text-right font-pregular">
            Forgot password
          </Text>

          <CustomButton
            title="Log In"
            handlePress={submit}
            containerStyles="mt-5"
            isLoading={isSubmitting}
          />

          <View className=" mt-5 flex-row justify-center gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don’t have an account?
            </Text>
            <Link
              href="/signUp"
              className="text-lg text-secondary-100 font-psemibold"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
