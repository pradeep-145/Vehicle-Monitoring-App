import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'
import { useVehicle } from '@/context/VehicleContext'
const analytics = () => {
    const{selectedVehicle}=useVehicle()
  return (
    <ScrollView  className='mt-10 border-2 flex-1 p-6'>  


        {
            selectedVehicle&&<View className='h-80 border-2 rounded-lg'>
                <Text>Hello</Text>
                </View>
        }
        <Picker
            selectedValue={1}
            onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
            style={{  }}
        >
            <Picker.Item label="Fuel" value={1} />
            <Picker.Item label="Speed" value={2} />

        </Picker>
    </ScrollView>
  )
}

export default analytics