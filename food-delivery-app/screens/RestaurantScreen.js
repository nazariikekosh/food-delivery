import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function RestaurantScreen() {
  const {params} = useRoute();
  let item = params;
  // console.log('restaurant:', item);
  return (
    <View>
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
        </View>
      </ScrollView>
    </View>
  )
}