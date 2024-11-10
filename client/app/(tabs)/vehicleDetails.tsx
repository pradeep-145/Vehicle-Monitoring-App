import { View, Text } from 'react-native';
import React from 'react';
import { useVehicle } from '@/context/VehicleContext';

const VehicleDetails = () => {
  const { selectedVehicle } = useVehicle();  // Access the selected vehicle

  return (
    <View>
      <Text>Vehicle Name: {selectedVehicle?.name}</Text>
      <Text>Vehicle ID: {selectedVehicle?.id}</Text>
    </View>
  );
};

export default VehicleDetails;
