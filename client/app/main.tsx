import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const main = () => {
  return (
    <Redirect href="/(tabs)/" />
  )
}

export default main