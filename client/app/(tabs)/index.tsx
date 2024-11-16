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
      const ws = new WebSocket('ws://192.168.1.6:8080');
  
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
      <ScrollView contentContainerStyle={{paddingBottom:500,paddingHorizontal:20,paddingTop:50}}>
       {
            selectedVehicle&&<View className='flex justify-center items-center'><Text className='text-center font-bold text-xl bg-[#76ABAE] rounded-xl w-32 p-1'>{selectedVehicle.name}</Text></View>
       }
       <View className='mt-4'>
      <Text className="text-lg bg-[#76ABAE]  border-2 border-[#76ABAE] rounded-xl w-20 text-center font-bold p-1 mb-4">MAP</Text>
      </View>
      <View className="flex h-1/2 border-black mb-8" style={{
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
      <View className='flex flex-row flex-wrap gap-14'>
      <View className='flex flex-col'>
        <Text className='text-lg bg-[#76ABAE]  border-2 border-[#76ABAE] rounded-lg w-40 text-center font-bold p-1 mb-4'>FUEL LEVEL</Text>

      {data ? (
        <View className='bg-[#243642] border-2 border-[#76ABAE] rounded-lg font-bold p-1 text-md w-40' >
        <Text> {data.voltage} </Text>
        </View>
      ) : (
        <Text className='text-[#76ABAE] bg-[#243642] border-2 border-[#76ABAE] rounded-lg font-bold p-6 text-md w-40 text-center h-24'>No vehicle selected</Text>
      )}
      </View>

      <View className='flex flex-col mt-10'>
        <Text className='text-lg bg-[#76ABAE] border-2 border-[#76ABAE] rounded-lg w-40 text-center font-bold p-1 mb-4'>SPEED</Text>

      {selectedVehicle ? (
        <View className='bg-[#243642] border-2 border-[#76ABAE] rounded-lg font-bold p-1 text-md w-40' >
        <Text className='text-[#76ABAE]'> {selectedVehicle.id} </Text>
        <Text className='text-[#76ABAE]'>1</Text>
        <Text className='text-[#76ABAE]'>1</Text>
        <Text className='text-[#76ABAE]'>1</Text>
        <Text className='text-[#76ABAE]'>1</Text>
        </View>
      ) : (
        <Text className='text-[#76ABAE] bg-[#243642] border-2 border-[#76ABAE] rounded-lg font-bold p-6 text-md w-40 text-center h-24'>No vehicle selected</Text>
      )}
      </View>

      <View className='flex flex-col mt-10'>
        <Text className='text-lg bg-[#76ABAE]  border-2 border-[#76ABAE] rounded-lg w-40 text-center font-bold p-1 mb-4'>ENGINE STATUS</Text>

      {selectedVehicle ? (
        <View className='bg-[#243642] border-2 border-[#76ABAE] rounded-lg font-bold p-1 text-md w-40' >
        <Text className='text-[#76ABAE]'> {selectedVehicle.id} </Text>
        <Text className='text-[#76ABAE]'>1</Text>
        <Text className='text-[#76ABAE]'>1</Text>
        <Text className='text-[#76ABAE]'>1</Text>
        <Text className='text-[#76ABAE]'>1</Text>
        </View>
      ) : (
        <Text className='text-[#76ABAE] bg-[#243642] border-2 border-[#76ABAE] rounded-lg font-bold p-6 text-md w-40 text-center h-24'>No vehicle selected</Text>

      )}
      </View>

      <View className='flex flex-col mt-10'>
        <Text className='text-lg bg-[#76ABAE]  border-2 border-[#76ABAE] rounded-lg w-40 text-center font-bold p-1 mb-4'>GEAR NUMBER</Text>

      {selectedVehicle ? (
        <View className='bg-[#243642] border-2 border-[#76ABAE] rounded-lg font-bold p-1 text-md w-40' >
        <Text className='text-[#76ABAE]'>{selectedVehicle.id} </Text>
        <Text className='text-[#76ABAE]'>1</Text>
        <Text className='text-[#76ABAE]'>1</Text>
        <Text className='text-[#76ABAE]'>1</Text>
        <Text className='text-[#76ABAE]'>1</Text>
        </View>
      ) : (
        <Text className='text-[#76ABAE] bg-[#243642] border-2 border-[#76ABAE] rounded-lg font-bold p-6 text-md w-40 text-center h-24'>No vehicle selected</Text>
      )}
      </View>
      </View>
      </ScrollView>    

    
  );
}
export default index;