import{ View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router';
import { useVehicle } from '@/context/VehicleContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const chooseVehicle = () => {
  const {selectedVehicle,setSelectedVehicle}=useVehicle()
  const [vehicles, setVehicles] = useState<any>([]);

  const apiUrl = 'http://10.1.76.27:3000';

  const fetchDetails = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await axios.get(`${apiUrl}/protected/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      setVehicles(response.data.vehicles);
    } catch (err) {
      console.log('Error fetching user details:', err);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

const handleSet=(vehicle: { id: number; name: string; })=>{
  setSelectedVehicle(vehicle)
  console.log(selectedVehicle)
  setTimeout(() => {
    router.replace('/(tabs)')
  }, 1000);
}
  return (
    <SafeAreaView className=' p-9 flex-1 gap-5 flex-col justify-center '>
      <View className="gap-5 flex items-center justify-center">
          {vehicles.map(vehicle => (
            <TouchableOpacity
              key={vehicle.id}
              className={`rounded-xl w-60 h-12 flex items-center justify-center ${selectedVehicle?.id === vehicle.id ? 'bg-[#76ABAE] text-black' : 'bg-[#243642] border-2 border-[#76ABAE]'}`}
              onPress={() => {
                setSelectedVehicle(vehicle);
                router.replace(`/(tabs)`);
              }}
            >
              <Text className={`text-[#76ABAE] ${selectedVehicle?.id === vehicle.id ? 'text-black' :'text-[#76ABAE]'}`}>{vehicle.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
    </SafeAreaView>
  )}

export default chooseVehicle