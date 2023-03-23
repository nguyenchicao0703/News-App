import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const Screen2 = (props) => {
    const {navigation, route } = props;
    const {params} = route;

    const Clickk = () => {
        navigation.navigate('Screen1');
    }
  return (
    <View>
      <Text style={styles.text}>Screen2</Text>
      <Text style={styles.text}>{params?.name}</Text>
      <Text style={styles.text}>{params?.old}</Text>
      <Pressable style={styles.pressable} onPress={Clickk}>
        <Text style={styles.text}>Go back Srceen 1</Text>
      </Pressable>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: 'yellow',
        height: 30
    },
    text: {
        color: 'black'
    }
})