import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VehicleProvider } from './context/VehicleContext';  // Adjust the path as needed
import AuthNavigator from './app/auth/_layout';  // Assuming this handles authentication stack
import TabsNavigator from './app/tabs/_layout';  // Assuming this is the main app tabs layout

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <VehicleProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={TabsNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </VehicleProvider>
  );
}
