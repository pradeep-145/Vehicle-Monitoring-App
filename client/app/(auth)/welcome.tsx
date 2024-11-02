import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

const welcome = () => {
    const handleSkip=()=>{
        router.replace('/(auth)/sign-up');
    }

  return (
    <SafeAreaView className='items-end dark:text-white p-2'>
      <TouchableOpacity onPress={()=>{
        handleSkip();
      }}>
        <Text className='text-xl font-bold'>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default welcome