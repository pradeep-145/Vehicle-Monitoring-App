import { Tabs } from 'expo-router';
import React from 'react';
import { VehicleProvider } from '@/context/VehicleContext';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();




  return (
    
  

    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle:{
          backgroundColor: '#000000',
          height:50,
          display:'flex',
          flexDirection:'row',
          borderRadius:100,
          margin:5,
          marginHorizontal:20,
          justifyContent:'space-between',
          
          position:'relative'

          
        }
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color}
            />
          ),
          
        }}

      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'analytics' : 'analytics-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
        />
      
    </Tabs>
  
  );
}
