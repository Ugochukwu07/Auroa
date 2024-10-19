import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'

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
    <View>
      <Text>TabLayout</Text>
    </View>
  )
}

export default AuthLayout