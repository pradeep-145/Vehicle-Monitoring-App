import { useVehicle } from '@/context/VehicleContext';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import MapView, { MarkerAnimated } from 'react-native-maps';

const index=()=> {
  const { selectedVehicle } = useVehicle();
  const [fuelData, setFuelData] = useState([]);
  const [data, setData] = useState(null);
  const [location, setLocation] = useState({
    latitude: 11.273340,
    longitude: 77.60632,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

    useEffect(() => {
      // Connect to the WebSocket server
      const ws = new WebSocket('ws://192.168.101.195:8080');
  
      // Receive messages from the server
      ws.onmessage = (event) => {
        const data=JSON.parse(event.data)
        console.log('Message from server:',data.data.voltage);
        setData(data.data); // Parse JSON if data is in JSON format
      };
  
      return () => {
        ws.close(); // Clean up WebSocket connection on unmount
      };
    }, []);

  // axios.get('http://192.168.179.195:3000/protected/data').then((res)=>{
  //   console.log(res.data)
  //   setFuelData(res.data)

  // }).catch((err)=>{ console.log(err) } )
 
  return (
      <ScrollView className='mt-16' contentContainerStyle={{paddingBottom:500,paddingHorizontal:20}}>
       {
            selectedVehicle&&<Text className='text-center font-bold text-xl bg-[#AA831C] rounded-xl w-32 ml-24 mb-4 p-1'>{selectedVehicle.name}</Text>
       }
      <Text className="text-xl bg-[#3C3C3C] text-[#AA831C] border-2 border-[#AA831C] rounded-xl w-20 text-center font-bold p-1 mb-4">Map</Text>
      <View className="flex  h-1/3  border-black" style={{
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
      <View className='flex flex-row flex-wrap gap-14 mt-2'>
      <View className='flex flex-col'>
        <Text className='text-xl bg-[#3C3C3C] text-[#AA831C] border-2 border-[#AA831C] rounded-lg w-40 text-center font-bold p-1 mb-4'>Fuel Level</Text>

      {data ? (
        <View className='bg-[#3C3C3C] border-2 border-[#AA831C] rounded-lg font-bold p-1 text-md w-40' >
        <Text> {data.voltage} </Text>
        </View>
      ) : (
        <Text>No data Recieved yet</Text>
      )}
      </View>

      <View className='flex flex-col mt-10'>
        <Text className='text-xl bg-[#3C3C3C] text-[#AA831C] border-2 border-[#AA831C] rounded-lg w-40 text-center font-bold p-1 mb-4'>Speed</Text>

      {selectedVehicle ? (
        <View className='bg-[#3C3C3C] border-2 border-[#AA831C] rounded-lg font-bold p-1 text-md w-40' >
        <Text> {selectedVehicle.id} </Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        </View>
      ) : (
        <Text>No vehicle selected</Text>
      )}
      </View>

      <View className='flex flex-col mt-10'>
        <Text className='text-xl bg-[#3C3C3C] text-[#AA831C] border-2 border-[#AA831C] rounded-lg w-40 text-center font-bold p-1 mb-4'>Engine Status</Text>

      {selectedVehicle ? (
        <View className='bg-[#3C3C3C] border-2 border-[#AA831C] rounded-lg font-bold p-1 text-md w-40' >
        <Text> {selectedVehicle.id} </Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        </View>
      ) : (
        <Text>No vehicle selected</Text>

      )}
      </View>

      <View className='flex flex-col mt-10'>
        <Text className='text-xl bg-[#3C3C3C] text-[#AA831C] border-2 border-[#AA831C] rounded-lg w-40 text-center font-bold p-1 mb-4'>Gear number</Text>

      {selectedVehicle ? (
        <View className='bg-[#3C3C3C] border-2 border-[#AA831C] rounded-lg font-bold p-1 text-md w-40' >
        <Text>{selectedVehicle.id} </Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        <Text>1</Text>
        </View>
      ) : (
        <Text>No vehicle selected</Text>
      )}
      </View>
      </View>
      </ScrollView>    

    
  );
}
export default index;