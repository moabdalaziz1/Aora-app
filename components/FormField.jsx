import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { icons } from "../constants";

const FormField = ({
  label,
  value,
  placeholder,
  handleChangeValue,
  customStyles,
  keyboardType = "default",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`space-y-2 ${customStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium mb-2">{label}</Text>

      <View
        className={`border-2 border-black-200 w-full h-16 px-4
       bg-black-100 rounded-lg ${
         isFocused && "border-secondary"
       } flex-row items-center `}
      >
        <TextInput
          className="flex-1 text-base text-white font-semibold 
          tracking-wide justify-center h-full w-full"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          selectionColor={"#FF9C01"}
          keyboardType={keyboardType}
          onChangeText={handleChangeValue}
          secureTextEntry={label === "Password" && !showPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {label === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              className="w-7 h-7"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
