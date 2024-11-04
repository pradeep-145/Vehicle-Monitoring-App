import{ View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Link, NavigationProp } from '@react-navigation/native';
import { router } from 'expo-router';
import { useVehicle } from '@/context/VehicleContext';

const chooseVehicle = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const {setSelectedVehicle}=useVehicle()
  const vehicles=[{
    id:1,
    name:"vehicle1"
  },
  {
    id:2,
    name:"vehicle 2"
  },
  {
    id:3,
    name:"vehicle 3"
  }

]
  return (
    <SafeAreaView className=' p-9 flex-1 gap-5 flex-col justify-center '>
      {vehicles.map(vehicle=>{

        return(

      <TouchableOpacity key={vehicle.id} className='bg-blue-300 flex items-center justify-center rounded-xl h-20 w-full ' onPress={()=>{
      setSelectedVehicle(vehicle)
      router.replace('/(tabs)')
      }} >
        <Text>{vehicle.name}</Text>
      </TouchableOpacity>
        )
        }
      )

      }
    </SafeAreaView>
  )}

export default chooseVehicle