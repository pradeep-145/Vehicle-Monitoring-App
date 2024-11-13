import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import {useVehicle} from '@/context/VehicleContext'
const main = () => {
  const {setSelectedVehicle}=useVehicle()
  return (<>
    {setSelectedVehicle({
      id:1,
      name:"vehicle1"
    })}
    <Redirect href="/(tabs)/" />
    </>
  )
}

export default main