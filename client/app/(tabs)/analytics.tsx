import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'
import { useVehicle } from '@/context/VehicleContext'
import { BarChart } from 'react-native-chart-kit'
const analytics = () => {
    const{selectedVehicle}=useVehicle()
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
          },
        ],
      };
  return (
    <ScrollView  className='mt-10 border-2 flex p-6'>  


        {
            selectedVehicle&&<View className=' flex-1 h-80 border-2 rounded-lg'>
                <Text>Hello</Text>
                </View>
        }
        <View className='flex-1'>
        <Picker
            selectedValue={1}
            onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
            style={{  }}
            >
            <Picker.Item label="Fuel" value={1} />
            <Picker.Item label="Speed" value={2} />

        </Picker>
        <View>
        <BarChart
        data={data}
        width={Dimensions.get('window').width - 32} // Width of the chart
        height={220} // Height of the chart
        yAxisLabel="$"
        yAxisSuffix="" // Adding yAxisSuffix as an empty string to fix the error
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2, // Optional, specifies decimal places in labels
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        verticalLabelRotation={30}
      />
    </View>
        </View>
    </ScrollView>
  )
}

export default analytics