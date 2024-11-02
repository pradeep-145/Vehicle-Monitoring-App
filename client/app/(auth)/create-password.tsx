import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
const createPassword = () => {
  return (
    <SafeAreaView className='flex-1  items-center '>
        <View className='mt-60 items-center'>
            <Text className='text-2xl font-bold'>Create Password</Text>
            <TextInput className='border-2 w-80 rounded-lg p-2 mt-5' placeholder='New Password'/>
            <TextInput className='border-2 w-80 rounded-lg p-2 mt-5' placeholder='Re Enter Password'/>
            <TouchableOpacity className='bg-blue-500 w-80 rounded-lg p-2 mt-5 items-center justify-center' onPress={()=>{
                router.replace('/sign-in');
            }} >
                <Text className='text-white'>Create Password</Text>
            </TouchableOpacity>            
        </View>
    </SafeAreaView>
  )
}

export default createPassword