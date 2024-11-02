import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Link, router } from 'expo-router'

const signIn = () => {
    const [showPassWord, setShowPassWord] = React.useState(true)
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-3xl font-bold'>Sign In</Text>
      <TextInput  className='border-2 w-80 rounded-lg p-2 mt-5' placeholder='Email'/>
            <TextInput  className='border-2 w-80 rounded-lg p-2 mt-5' placeholder='Password' secureTextEntry={showPassWord}/>
            <TouchableOpacity onPress={()=>setShowPassWord(!showPassWord)} className='absolute translate-y-[24px] translate-x-32'>
                <MaterialIcons name={showPassWord ? 'visibility' : 'visibility-off'} size={24} color="black" />
            </TouchableOpacity>
            <View className='items-end w-80'>
            
            <Link href={'/(auth)/forgot-password'} className=' right-0'>Forgot password?</Link>
            </View>
            <TouchableOpacity className='bg-blue-500 w-80 rounded-lg p-2 mt-5 items-center justify-center' onPress={()=>{
              
            }}>
              <Link href={'/(auth)/choose-vehicle'}>
                <Text className='text-white'>Sign In</Text>
              </Link>
            </TouchableOpacity>
    </View>
  )
}

export default signIn