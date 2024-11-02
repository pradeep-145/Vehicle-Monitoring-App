import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
const forgotPassword = () => {
    const handleSubmit=()=>{
        alert('Email Sent')
        setTimeout(() => {
            router.replace('/otp-verification');
        }, 2000);
    }
  return (
    <SafeAreaView className='flex-1  items-center '>
        <View className='mt-60 items-center'>
            <Text className='text-2xl font-bold'>Forgot Password</Text>
            <TextInput className='border-2 w-80 rounded-lg p-2 mt-5' placeholder='Email'/>
            <TouchableOpacity className='bg-blue-500 w-80 rounded-lg p-2 mt-5 items-center justify-center' onPress={()=>handleSubmit()}>
                <Text className='text-white'>Send Email</Text>
            </TouchableOpacity>            
        </View>
    </SafeAreaView>
  )
}

export default forgotPassword