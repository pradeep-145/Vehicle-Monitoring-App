import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useVehicle } from '@/context/VehicleContext';

const Profile = () => {
  const { selectedVehicle, setSelectedVehicle } = useVehicle();

  const vehicles = [
    { id: 1, name: "Vehicle 1" },
    { id: 2, name: "Vehicle 2" },
    { id: 3, name: "Vehicle 3" },
  ];

  const [showAddVehicleForm, setShowAddVehicleForm] = useState(false);
  const [newVehicle, setNewVehicle] = useState({ name: '', number: '', type: '', model: '' });

  const handleAddVehicle = () => {
    setShowAddVehicleForm(true);
  };

  const handleSaveVehicle = () => {
    // Code to save the new vehicle
    setShowAddVehicleForm(false);
    setNewVehicle({ name: '', number: '', type: '', model: '' });
  };

  return (
    <SafeAreaView className="flex w-full flex-1 p-4">
      <View className="flex flex-row justify-between">
        <TouchableOpacity onPress={() => router.replace('/(auth)/sign-in')}>
          <Text className="font-bold text-md bg-yellow-500 opacity-80 p-2 rounded-xl">Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddVehicle}>
          <Text className="font-bold text-md bg-yellow-500 opacity-80 p-2 rounded-xl">Add Vehicle +</Text>
        </TouchableOpacity>
      </View>

      <Text className="font-bold text-xl mt-5 mb-5 text-yellow-500">My Vehicles</Text>
      <ScrollView>
        <View className="gap-5">
          {vehicles.map(vehicle => (
            <TouchableOpacity
              key={vehicle.id}
              className={`rounded-xl h-12 flex items-center justify-center ${selectedVehicle?.id === vehicle.id ? 'bg-yellow-500 opacity-90 text-black' : 'bg-transparent border-2 border-yellow-500'}`}
              onPress={() => {
                setSelectedVehicle(vehicle);
                router.replace(`/(tabs)`);
              }}
            >
              <Text className={`text-yellow-500 ${selectedVehicle?.id === vehicle.id ? 'text-black' :'text-yellow-500'}`}>{vehicle.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {showAddVehicleForm && (
          <View className="mt-5 bg-white p-5 rounded-xl shadow">
            <Text className="text-xl font-bold text-center mb-4">Add New Vehicle</Text>

            <TextInput
              className="border border-gray-300 rounded-lg p-2 mb-3"
              placeholder="Vehicle Name"
              value={newVehicle.name}
              onChangeText={(text) => setNewVehicle({ ...newVehicle, name: text })}
            />

            <TextInput
              className="border border-gray-300 rounded-lg p-2 mb-3"
              placeholder="Vehicle Number"
              value={newVehicle.number}
              onChangeText={(text) => setNewVehicle({ ...newVehicle, number: text })}
            />

            <TextInput
              className="border border-gray-300 rounded-lg p-2 mb-3"
              placeholder="Vehicle Type"
              value={newVehicle.type}
              onChangeText={(text) => setNewVehicle({ ...newVehicle, type: text })}
            />

            <TextInput
              className="border border-gray-300 rounded-lg p-2 mb-3"
              placeholder="Vehicle Model"
              value={newVehicle.model}
              onChangeText={(text) => setNewVehicle({ ...newVehicle, model: text })}
            />

            <TouchableOpacity
              className="bg-yellow-500 rounded-xl p-3 mt-3 items-center"
              onPress={handleSaveVehicle}
            >
              <Text className="text-white">Save Vehicle</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
