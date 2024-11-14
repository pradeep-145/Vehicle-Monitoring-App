import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect } from 'expo-router'
import {useVehicle} from '@/context/VehicleContext'
const main = () => {
  const {setSelectedVehicle}=useVehicle()
  useEffect(()=>{
    setSelectedVehicle({
      id:1,
      name:"vehicle1"
    })

  }
)
  return (
  <>
    <Redirect href="/(tabs)/analytics" />

    </>
  )
}

export default main