import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useRouter } from 'expo-router'; // Fixed import for router in Expo
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

const signIn = () => {
    const [sendOtp, setSendOtp] = useState(true);
    const [showOtp, setShowOtp] = useState(false);
    const [mobile, setMobile] = useState('');
    const [serverOtp, setServerOtp] = useState('');
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false); // Loading state for feedback
    const router = useRouter(); // Fix for Expo Router

    const API_BASE_URL = 'http://192.168.179.195:3000/auth';

    // Function to handle sending OTP
    const handleSendOtp = async () => {
        if (mobile.length !== 10) {
            Alert.alert('Validation Error', 'Mobile number should be 10 digits');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/send-otp`, {
                params: { mobile },
            });
            if (response.data.success) {
                setServerOtp(response.data.otp); 
                setSendOtp(false);
                setShowOtp(true);
                Alert.alert('OTP Sent', 'Please check your phone for the OTP.');
            }
        } catch (error) {
          console.log(error)
            Alert.alert('Error', 'Failed to send OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Function to handle submission of OTP for verification and login
    const handleSubmit = async () => {
      console.log(serverOtp)
        if (mobile.length !== 10) {
            Alert.alert('Validation Error', 'Mobile number should be 10 digits');
            return;
        }
        else if(otp.length !== 6){
            Alert.alert('Validation Error', 'OTP should be 6 digits');
            return;
            }
        if (otp != serverOtp) {
            Alert.alert('Error', 'Incorrect OTP. Please try again.');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/sign-in`, { mobile });
            if (response.data.message === 'Success') {
                await AsyncStorage.setItem('token', response.data.token); // Store token using AsyncStorage
                router.replace('/choose-vehicle');
            }
        } catch (error) {
            
            Alert.alert('Error', 'Failed to sign in. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View className='flex-1 items-center justify-center'>
            <TouchableOpacity
                className='absolute top-10 left-5 p-2'
                onPress={() => router.replace('/welcome')}
            >
                <Text className='text-blue-500'>Back</Text>
            </TouchableOpacity>
            <View className='border-2 border-gray-400 rounded-3xl p-3'>
            <Text className='text-3xl font-bold text-center'>Sign In</Text>
            
            {/* Mobile Number Input */}
            <View className='flex justify-center items-center'>
                <TextInput
                    className='border-2 w-80 rounded-full border-gray-400 p-2 mt-5'
                    placeholder='Mobile Number'
                    keyboardType='numeric'
                    maxLength={10}
                    value={mobile}
                    onChangeText={setMobile}
                />
                <TouchableOpacity
                        className='bg-blue-500 absolute rounded-full p-2 items-center justify-center mt-[20px] right-2 w-24'
                        disabled={!sendOtp || loading}
                    onPress={handleSendOtp}
                >
                    
                    <Text className='text-white'>Send OTP</Text>
                </TouchableOpacity>
                <View className='flex flex-row justify-center mt-4'>
                    <Text className='text-sm text-center'>New here? </Text>
                    <TouchableOpacity onPress={() => router.replace('/(auth)/sign-up')}>
                        <Text className='text-blue-500'>Sign Up</Text>
                        </TouchableOpacity>
                        </View>
            </View>

            {/* OTP Input */}
            {showOtp && (
                <View className='w-80'>
                    <TextInput
                    className='border-2 w-80 rounded-full border-gray-400 p-2 mt-5'
                    placeholder='Enter OTP'
                        keyboardType='numeric'
                        maxLength={6}
                        value={otp}
                        onChangeText={setOtp}
                    />
                    
                    <TouchableOpacity
                        className='bg-blue-500 absolute rounded-lg p-2 items-center justify-center mt-[26px] right-2 w-20'
                        onPress={handleSubmit}
                        disabled={loading}
                    >
                        <Text className='text-white'>Sign In</Text>
                    </TouchableOpacity>
                    
                </View>
            )}

            {/* Loading Indicator */}
            {loading && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />}
        </View>
        </View>
    );
};

export default signIn;
