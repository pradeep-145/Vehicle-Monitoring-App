import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useVehicle } from '@/context/VehicleContext'
import AddVehicle from '@/components/add-vehicle'
const profile = () => {
  const {setSelectedVehicle}=useVehicle()
    const vehicles=[
        {id:1,name:"vehicle 1"},
        {id:2,name:"vehicle 2"},
        {id:3,name:"vehicle 3"}
    ]
    const [showModel,setShowModel]=React.useState(false)
  return (
    <SafeAreaView className='flex w-full flex-1'>
      <View className='flex justify-between flex-row'>
      <TouchableOpacity onPress={()=>router.replace('/(auth)/sign-in')}>
        <Text className='font-bold text-md m-4 bg-gray-300 p-2 rounded-xl'>Logout</Text>
    </TouchableOpacity>
    
      <TouchableOpacity onPress={()=>setShowModel(true)}>
      <Text className='font-bold text-md m-4 bg-gray-300 p-2 rounded-xl'>Add vehicle +</Text>
      </TouchableOpacity>

      </View>
        <Text className='font-bold text-xl ml-5 mb-5'>Your Vehicles </Text>
        <View className='flex gap-5 justify-center items-center'>
        {vehicles.map(vehicle=>{        
          return(
          <TouchableOpacity key={vehicle.id} className='bg-blue-300 flex items-center justify-center rounded-xl h-12 w-3/4' onPress={()=>{
            setSelectedVehicle(vehicle)
            router.replace(`/(tabs)`)}} >
          <Text>{vehicle.name}</Text>
          </TouchableOpacity>
          )
          }
          )
          }
        </View>
        {showModel&&
        <View className='flex justify-center items-center bg-black p-20'>
          <AddVehicle />
        </View>
        }
    </SafeAreaView>
  )
}

export default profile