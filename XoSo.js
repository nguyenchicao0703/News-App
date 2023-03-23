import { View, Text, Button, TextInput } from 'react-native'
import React, { useState, StyleSheet } from 'react'

const XoSo = () => {
  const [so, setso] = useState(0);
  const [number, setnumber] = useState(0);
  const random=() => {
    setnumber(3);
    if(so==number) {
      alert("Ban da trung");
    } 
    else {
      alert("Ban da sai");
    }
  }
  return (
    <View>
      <Text>Xo So</Text>
      <TextInput onChangeText={setso}></TextInput>
      <Button onPress={random} title='xoso'></Button>
    </View>
  )
}

export default XoSo