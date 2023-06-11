import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather"

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* search bar*/}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 item-center p-3 rounded-full border border-grey-300">
          <Icon.Search height="25" width="25" stroke="grey" />
        </View>
      </View>
    </SafeAreaView>
  )
}