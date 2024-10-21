import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect, Stack } from 'expo-router'

import { icons } from '../../constants'
import { StatusBar } from 'expo-status-bar'

const TabIcon = ({ icon, color, name, focused}) => {
    return (
        <View>
            <Image 
                source={icon}
            />
        </View>
    )
}

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name='sign-in'
          options={{ 
            headerShown: false
           }}
        />
        <Stack.Screen
          name='sign-up'
          options={{ 
            headerShown: false
           }}
        />
      </Stack>

      <StatusBar backgroundColor='#161622' style='light' />
    </>
  )
}

export default AuthLayout