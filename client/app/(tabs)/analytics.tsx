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
      contentContainerStyle={{ alignItems: 'center' }}
      className="flex p-4 mt-10 text-yellow-500"
    >
      {/* Selected Vehicle Details */}
      {selectedVehicle && (
        <View className="flex-1 h-80 border-2 border-yellow-500 rounded-lg w-full items-center justify-center mb-4">
          <Text className="text-lg font-bold mb-2 text-yellow-500">
            Driver Details
          </Text>
          <Text className="text-yellow-500">Name: John Doe</Text>
          <Text className="text-yellow-500">License Number: ABC123456</Text>
          <Text className="text-yellow-500">Experience: 5 years</Text>
          <Text className="text-yellow-500">Contact: (123) 456-7890</Text>
        </View>
      )}

      {/* Picker Component */}
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={1}
          onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
          style={styles.picker}
          dropdownIconColor="#eab308"
        >
          <Picker.Item label="Fuel" value={1} />
          <Picker.Item label="Speed" value={2} />
        </Picker>
      </View>

      {/* Bar Chart */}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pickerWrapper: {
    width: '100%',
    backgroundColor: 'black', // Black background
    borderRadius: 5, // Rounded borders
    borderWidth: 2, // Yellow border thickness
    borderColor: '#eab308', // Yellow border color
    overflow: 'hidden', // Ensures rounded corners apply properly
    marginBottom: 20,
  },
  picker: {
    color: '#eab308', // Text color for options
    width: '100%',
  },
});

export default Analytics;
