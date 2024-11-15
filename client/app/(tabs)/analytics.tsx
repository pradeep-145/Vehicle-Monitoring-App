import { View, Text, ScrollView, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import { useVehicle } from '@/context/VehicleContext';
import { BarChart } from 'react-native-chart-kit';

const analytics = () => {
  const { selectedVehicle } = useVehicle();
  
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  // Calculate width based on screen size with padding adjustments for better responsiveness
  const chartWidth = Dimensions.get('window').width * 0.9;

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} className='border-2 flex p-4'>
      {selectedVehicle && (
        <View className='flex-1 h-80 border-2 rounded-lg w-full items-center justify-center mb-4'>
          <View className='w-full p-4'></View>
            <Text className='text-lg font-bold mb-2'>Driver Details</Text>
            <Text>Name: John Doe</Text>
            <Text>License Number: ABC123456</Text>
            <Text>Experience: 5 years</Text>
            <Text>Contact: (123) 456-7890</Text>
          </View>
      )}

      <View className='flex-1 w-full'>
        <Picker
          selectedValue={1}
          onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
          style={{ width: '100%' }}
        >
          <Picker.Item label="Fuel" value={1} />
          <Picker.Item label="Speed" value={2} />
        </Picker>

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          
          <BarChart
            data={data}
            width={chartWidth} 
            
            height={220}
            yAxisLabel="$"
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            verticalLabelRotation={30}
            style={{ borderRadius: 10 }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default analytics;
