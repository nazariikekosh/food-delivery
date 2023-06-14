import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { themeColors } from '../theme';
import * as Icon from "react-native-feather"
import { useNavigation } from '@react-navigation/native';

export default function CartScreen() {
    const restaurant = featured.restaurants[0];
    const navigation = useNavigation()
  return (
    <View className="bg-white flex-1">
    {/* back button */}
    <View className="relative py-4 shadow-sm">
      <TouchableOpacity
      onPress={()=> navigation.goBack()}
       style={{backgroundColor: themeColors.bgColor(1)}} 
      className=" absolute z-10 rounded-full p-1 shadow top-5 left-2">
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
      </TouchableOpacity>
      <View>
        <Text className="text-center font-bold text-xl">Your cart</Text>
        <Text className="text-center text-gray-500">{restaurant.name}</Text>
      </View>
    </View>

    {/* delivery time */}

    <View style={{backgroundColor: themeColors.bgColor(0.2)}} 
    className="flex-row px-4 items-center">
      <Image source={require('../assets/images/bikeGuy.png')} className="w-20 h-20 rounded-full" />
      <Text className=" flex-1 pl-4">Deliver in 20-30 minutes</Text>
      <TouchableOpacity>
        <Text className="font-bold" style={{color: themeColors.text}}>
          Change
        </Text>
      </TouchableOpacity>
    </View>

  </View>
  )
}