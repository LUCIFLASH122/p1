import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Cart = () => {
  return (
    <SafeAreaView>
        <View className="flex-row justify-between items-center px-5 py-3 bg-green-500">
      <Text className="text-white text-lg font-bold">My Store</Text>
      <TouchableOpacity className="relative">
        <View className="absolute top-0 right-0 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
          <Text className="text-white text-xs">2</Text>
        </View>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default Cart