import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const otpVerification = () => {
  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <Text className='text-xl font-bold'>otpVerification</Text>
      <TextInput className='border-2 w-80 rounded-lg p-2 mt-5' placeholder='Enter OTP'/>
      <TouchableOpacity className='bg-blue-500 w-80 rounded-lg p-2 mt-5 items-center justify-center' onPress={()=>{
            router.replace('/create-password');
        }}>
        <Text className='text-white' >Verify</Text>  
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default otpVerification