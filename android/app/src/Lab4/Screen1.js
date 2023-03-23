import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const Screen1 = (props) => {
    const {navigation} = props;

    const Click = () => {
        navigation.navigate('Screen2', {'name': 'Nguyễn Văn A', 'old': '18'});
    }

  return (
    <View>
      <Text style={styles.text}>Screen1</Text>
      <Pressable style={styles.pressable} onPress={Click}>
        <Text style={styles.text}>Go to Srceen 2</Text>
      </Pressable>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: 'red',
        height: 30
    },
    text: {
        color: 'black'
    }
})