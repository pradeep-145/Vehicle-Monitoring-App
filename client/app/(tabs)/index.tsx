import { useVehicle } from '@/context/VehicleContext';
import { useState,useEffect } from 'react';
import { Text, View } from 'react-native';
import MapView, { MarkerAnimated } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';


const home=()=> {
  const { selectedVehicle } = useVehicle();
  const [location, setLocation] = useState({
    latitude: 11.273340,
    longitude: 77.60632,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  
  return (
    <SafeAreaView className="flex-1 p-4">
       {
            selectedVehicle&&<Text className='text-center font-bold text-xl bg-gray-300 rounded-xl w-32 ml-32 mb-4 p-1'>{selectedVehicle.name}</Text>
        }   
      <Text className="text-xl bg-gray-300 rounded-xl w-20 text-center font-bold p-1 mb-4">Map</Text>
      <View className="flex  h-1/2  border-black" style={{
        elevation:10,
        shadowColor:'#000',
        borderRadius:10,
      }}>

      <MapView
        region={location}
        className='flex-1'
      >
        <MarkerAnimated
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title="Test"
          description="Test"
        />
      </MapView>
      </View>
      <View className='mt-2'>

      {selectedVehicle ? (
        <Text >Fuel level: {selectedVehicle.id}</Text>
      ) : (
        <Text>No vehicle selected</Text>
      )}
      </View>
    </SafeAreaView>
  );
}
export default home;