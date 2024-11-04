import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useVehicle } from '@/context/VehicleContext'

const profile = () => {
  const {setSelectedVehicle}=useVehicle()
    const vehicles=[
        {
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
    <SafeAreaView className='flex w-full  flex-1'>
      <Text>profile</Text>
        <Text>Vehicles </Text>
        <View className='flex gap-10 justify-center items-center'>
        {vehicles.map(vehicle=>{


          
return(

<TouchableOpacity key={vehicle.id} className='bg-blue-300 flex items-center justify-center rounded-xl h-20  w-3/4 ' onPress={()=>{
  setSelectedVehicle(vehicle)
  router.replace(`/(tabs)`)}} >
<Text>{vehicle.name}</Text>

</TouchableOpacity>
)
}
)
}
        </View>
      
    <TouchableOpacity onPress={()=>router.replace('/(auth)/sign-in')}>
        <Text>Logout</Text>
    </TouchableOpacity>


    </SafeAreaView>
  )
}

export default profile