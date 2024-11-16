import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { VehicleProvider } from '@/context/VehicleContext';
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  if (!loaded) {
    return null;
  }
  const theme ={
     
  }
  return (
    <ThemeProvider value={DarkTheme}>
      <VehicleProvider>

      <Stack screenOptions={
        {
          headerShown: false,
        }
        
      }>
        <Stack.Screen name="main" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      </VehicleProvider>
    </ThemeProvider>
  );
}
