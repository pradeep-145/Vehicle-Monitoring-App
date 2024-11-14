import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const addVehicle = () => {
  return (
    <SafeAreaView>
    <View className='mt-10'>
      <Text className='text-2xl font-bold text-center mb-2'>Add New Vehicle</Text>
      <View className='flex justify-center items-center pt-4 pb-4 w-96 ml-4 mt-4'>
      <View>
        <Text className=' text-lg font-semibold'>Vehicle Name</Text>
        <TextInput className='border-2 border-gray-400 rounded-3xl w-80 mt-2 p-2' placeholder="Enter Vehicle Name" />
      </View>
      <View>
        <Text className='mt-4 text-lg font-semibold'>Vehicle Number</Text>
        <TextInput  className='border-2 border-gray-400 rounded-3xl  w-80 mt-2 p-2' placeholder="Enter Vehicle Number" />
    </View>
    <View>
      <Text className='mt-4 text-lg font-semibold'>Vehicle Type</Text>
      <TextInput  className='border-2 border-gray-400 rounded-3xl  w-80 mt-2 p-2' placeholder="Enter Vehicle Type" />
    </View>
    <View>
      <Text className='mt-4 text-lg font-semibold'>Vehicle Model</Text>
      <TextInput  className='border-2 border-gray-400 rounded-3xl  w-80 mt-2 p-2' placeholder="Enter Vehicle Model" />
    </View>
    </View>
    <TouchableOpacity className='bg-blue-500 rounded-3xl p-2 mt-4 w-52 ml-24 flex items-center justify-center'>
      <Text className='text-white'>Add Vehicle</Text>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default addVehicle