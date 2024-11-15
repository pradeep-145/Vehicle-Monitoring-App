import { useVehicle } from '@/context/VehicleContext';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import { useEffect } from 'react';

const Main = () => {
  const { setSelectedVehicle } = useVehicle();
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    // Set selected vehicle only once when the component mounts
    setSelectedVehicle({
      id: 1,
      name: "vehicle1"
    });
    console.log("hello")

    // Navigate to the sign-in page
    router.push('/(auth)/sign-in'); 
  }, [setSelectedVehicle, router]);

  return (
    <></> // No need for additional JSX in this case
  );
}

export default Main;
