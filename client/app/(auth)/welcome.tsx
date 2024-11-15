import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

const welcome = () => {
    const handleSignUp=()=>{
        router.replace('/(auth)/sign-up');
    }

  return (
    <SafeAreaView className='flex-1 justify-end mb-60 items-center dark:text-white p-2'>
      <Text className='text-3xl font-bold text-cyan-600'>Welcome!</Text>
      <Text className='text-md m-2'>Seamless Vehicle tracking made simple...</Text>
      <TouchableOpacity onPress={()=>{
        handleSignUp();
        
      }}>
        <Text className='text-lg font-semibold border-2 border-blue-300 bg-blue-300 rounded-3xl p-2 w-64 text-center mt-5'>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default welcome