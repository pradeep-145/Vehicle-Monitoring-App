import React, { useState } from 'react';
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

const signUp = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [mobile, setMobile] = useState('');
    const [sendOtp, setSendOtp] = useState(true);
    const [showOtp, setShowOtp] = useState(false);
    const [serverOtp, setServerOtp] = useState('');
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const API_BASE_URL = 'http://192.168.179.195:3000/auth';
    const handleSendOtp = async () => {
        if (mobile.length !== 10) {
            Alert.alert('Validation Error', 'Mobile number should be 10 digits');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/send-otp`, {
                params: { mobile }, // Send mobile as query param
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
    const handleSubmit = async () => {
        // Basic input validation
        if (mobile.length !== 10) {
            Alert.alert('Invalid Input', 'Mobile number should be of 10 digits');
            return;
        }

        try {
            const response = await axios.post(`${API_BASE_URL}/sign-up`, { mobile, username });
            if (response.data.message === 'Success') {
                Alert.alert('Success', 'Account created successfully');
                router.replace('/(auth)/sign-in');
            }

        } catch (error) {
            console.error(error);
            Alert.alert('Network Error', 'An error occurred while processing your request.');
        }
    };

    return (
        <ScrollView>
            <View className="h-screen items-center justify-center">
                <Text className="text-4xl font-bold">Create Account</Text>
                <TextInput
                    className="border-2 w-80 rounded-lg p-2 mt-5"
                    placeholder="User name"
                    onChangeText={setUsername}
                    value={username}
                />
                <View className='flex'>
                    <TextInput
                        className='border-2 w-80 rounded-lg p-2 mt-5'
                        placeholder='Mobile Number'
                        keyboardType='numeric'
                        maxLength={10}
                        value={mobile}
                        onChangeText={setMobile}
                    />
                    <TouchableOpacity
                        className='bg-blue-500 absolute rounded-lg p-2 items-center justify-center mt-[26px] right-2 w-20'
                        disabled={!sendOtp || loading}
                        onPress={handleSendOtp}
                    >
                        <Text className='text-white'>Send OTP</Text>
                    </TouchableOpacity>
                </View>

                {/* OTP Input */}
                {showOtp && (
                    <View className='w-80'>
                        <TextInput
                            className='border-2 w-full rounded-lg p-2 mt-5'
                            placeholder='Enter OTP'
                            keyboardType='numeric'
                            maxLength={4}
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
            </View>
        </ScrollView>
    );
};

export default signUp;
