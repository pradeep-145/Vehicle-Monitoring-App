import { Tabs } from 'expo-router';
import React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { VehicleProvider } from '@/context/VehicleContext';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000000',
            height: 70,
            borderRadius: 50,
            margin: 5,
            padding: 10,
            position: 'absolute',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: '',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
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
    </KeyboardAvoidingView>
  );
}
