import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'
import { useVehicle } from '@/context/VehicleContext'
const analytics = () => {
    const{selectedVehicle}=useVehicle()
  return (
    <SafeAreaView>
        {
            selectedVehicle&&<Text>Vehicle Details {selectedVehicle.id}</Text>
        }
        <Picker
            selectedValue={1}
            onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
        >
            <Picker.Item label="Fuel" value={1} />
            <Picker.Item label="Speed" value={2} />

        </Picker>
    </SafeAreaView>
  )
}

export default analytics