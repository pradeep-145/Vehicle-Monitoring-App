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
          <Text className="font-bold text-md bg-[#76ABAE] p-2 rounded-xl">Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddVehicle}>
          <Text className="font-bold text-md bg-[#76ABAE] p-2 rounded-xl">Add Vehicle +</Text>
        </TouchableOpacity>
      </View>

      <Text className="font-bold text-xl mt-6 underline mb-5 text-[#76ABAE]">MY VEHICLES</Text>
      <ScrollView>
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

        {showAddVehicleForm && (
          <View className="mt-10 border-2 border-[#76ABAE] p-5 rounded-xl shadow ">
            <Text className="text-xl font-bold text-center mb-4 text-[#76ABAE]">Add New Vehicle</Text>

            <TextInput
              className="border bg-[#243642] border-[#76ABAE] text-white rounded-lg p-2 mb-3"
              placeholder="Vehicle Name"
              placeholderTextColor="#94a3b8"
              value={newVehicle.name}
              onChangeText={(text) => setNewVehicle({ ...newVehicle, name: text })}
            />

            <TextInput
              className="border bg-[#243642] border-[#76ABAE] text-gray-400 rounded-lg p-2 mb-3"
              placeholder="Vehicle Number"
              placeholderTextColor="#94a3b8"
              value={newVehicle.number}
              onChangeText={(text) => setNewVehicle({ ...newVehicle, number: text })}
            />

            <TextInput
              className="border bg-[#243642] border-[#76ABAE] text-gray-400 rounded-lg p-2 mb-3"
              placeholder="Vehicle Type"
              placeholderTextColor="#94a3b8"
              value={newVehicle.type}
              onChangeText={(text) => setNewVehicle({ ...newVehicle, type: text })}
            />

            <TextInput
              className="border bg-[#243642] border-[#76ABAE] text-gray-400 rounded-lg p-2 mb-3"
              placeholder="Vehicle Model"
              placeholderTextColor="#94a3b8"
              value={newVehicle.model}
              onChangeText={(text) => setNewVehicle({ ...newVehicle, model: text })}
            />

            <TouchableOpacity
              className="bg-[#76ABAE] rounded-xl p-3 mt-3 items-center"
              onPress={handleSaveVehicle}
            >
              <Text className="text-black">Save Vehicle</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
