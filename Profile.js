//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// create a component
const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text>Make your Profile no.2</Text>
      <Text>Welcome home of dashboard</Text>
      <Text>Take new steps</Text>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
})

//make this component available to the app
export default Profile
