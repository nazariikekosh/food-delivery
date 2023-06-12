import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import { ScrollView } from 'react-native'
import Categories from '../components/categories'

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />

      {/* search bar*/}

      <View className="flex-row items-center space-x-2 px-4 py-2">
        <View className="flex-row flex-1 item-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder='Restaurants' className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">Drohobuch, UKR</Text>
          </View>
        </View>
        <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
          <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
        </View>
      </View>

      {/* main */}

      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20
        }}
      >
        {/* categories */}
        <Categories />
      </ScrollView>

    </SafeAreaView>
  )
}