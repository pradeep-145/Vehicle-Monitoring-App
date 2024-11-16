import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import { useVehicle } from '@/context/VehicleContext';
import { BarChart } from 'react-native-chart-kit';

const Analytics = () => {
  const { selectedVehicle } = useVehicle();

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const chartWidth = Dimensions.get('window').width * 0.9;

  return (
    <ScrollView
      // contentContainerStyle={{ alignItems: 'center' }}
      className="flex p-4 mt-12 text-[#76ABAE]"
    >
      <Text className="text-lg font-bold text-black bg-[#76ABAE] rounded-xl p-2 w-36 text-center mb-2">ANALYTICS</Text>
      {/* Selected Vehicle Details */}
      {selectedVehicle && (
        <View className="flex h-80 border-2 bg-[#243642] border-[#76ABAE] rounded-lg w-full items-center justify-center mb-4 mt-4">
          <Text className="text-lg font-bold mb-2 text-[#76ABAE]">
            Driver Details
          </Text>
          <Text className="text-[#76ABAE]">Name: John Doe</Text>
          <Text className="text-[#76ABAE]">License Number: ABC123456</Text>
          <Text className="text-[#76ABAE]">Experience: 5 years</Text>
          <Text className="text-[#76ABAE]">Contact: (123) 456-7890</Text>
        </View>
      )}

      {/* Picker Component */}
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={1}
          onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
          style={styles.picker}
          dropdownIconColor="#76ABAE"
        >
          <Picker.Item label="Fuel" value={1} color='#76ABAE' />
          <Picker.Item label="Speed" value={2} color='#76ABAE' />
        </Picker>
      </View>

      {/* Bar Chart */}
      {/* <View className='flex-1 items-start'>
      <Text className='text-xl font-bold text-black bg-[#76ABAE] rounded-xl p-2 text-center mt-4'>Fuel Consumption</Text>
      </View> */}
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <BarChart
          data={data}
          width={chartWidth}
          height={220}
          yAxisLabel="$"
          yAxisSuffix=""
          chartConfig={{
            backgroundColor: '#76ABAE',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#76ABAE',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          verticalLabelRotation={30}
          style={{ borderRadius: 10 }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pickerWrapper: {
    width: '38%',
    backgroundColor: '#243642', // Black background
    borderRadius: 15, // Rounded borders
    borderWidth: 2, // Yellow border thickness
    borderColor: '#76ABAE', // Yellow border color
    overflow: 'hidden', // Ensures rounded corners apply properly
    marginBottom: 10,
    marginTop:10,
    
  },
  picker: {
    color: '#76ABAE', // Text color for options
    width: '100%',
  },
});

export default Analytics;
