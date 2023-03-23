import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Onboarding = () => {
  return (
    <View style={styles.container}>
        <Image source={require('./../Image/google.png')} />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });

export default Onboarding