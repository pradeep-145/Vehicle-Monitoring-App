import { useGlobalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function HomeScreen() {
  const { vehicleId } = useGlobalSearchParams(); 
  return (
    <SafeAreaView className='flex-1'>
      <Text>Selected Vehicle ID: {vehicleId}</Text>
    </SafeAreaView>
  );
}
