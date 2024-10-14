import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';

const Index = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView className="flex-1 justify-center items-center p-4">
      <Image
        source={require('../images/logo.png')}
        className="w-212 h-92"
      />
      <View className="my-4">
        <Text className="text-lg font-bold text-center text-[#113b64]">Hurry Up!!</Text>
        <Text className="text-center">Order your food before you actually leave</Text>
        <Text className="text-center">and enjoy the taste on time.....</Text>
      </View>

      <View className="w-full">
        <Text className="mb-2">Phone</Text>
        <TextInput
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          className={`w-full border ${isFocused ? 'border-blue-500' : 'border-gray-200'} rounded-lg py-3 px-4`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity className="mt-4 bg-red-700 border border-red-600 rounded-xl py-3 px-6" onPress={() => console.log('OTP Sent')}>
          <Text className="text-white font-bold text-center">Send OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Index;
