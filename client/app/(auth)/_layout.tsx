import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name="welcome" options={{headerShown:false}} />
        <Stack.Screen name="sign-in" options={{headerShown:false}} />
        <Stack.Screen name="sign-up" options={{headerShown:false}} />
        <Stack.Screen name="forgot-password" options={{headerShown:false}} />  
        <Stack.Screen name="create-password" options={{headerShown:false}} />
        <Stack.Screen name="otp-verification" options={{headerShown:false}} />
        <Stack.Screen name="choose-vehicle" options={{headerShown:false}} />
    </Stack>
  )
}

export default _layout