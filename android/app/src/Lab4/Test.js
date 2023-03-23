import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const Test = () => {
    const [isSetup, setIsSetUp] = useState(true);
  return (
    <View style={styles.container}>
        <>
        {
            isSetup == true ?
            <View style={styles.plusContainer}>
                <Pressable style={styles.buttonPlus}>
                    <Image style={styles.imageBottom} source={require('./../Image/album.png')} />
                    <Text style={styles.textButton}>Album</Text>
                </Pressable>
                <Pressable style={styles.buttonPlus}>
                    <Image style={styles.imageBottom} source={require('./../Image/camera.png')} />
                    <Text style={styles.textButton}>Camera</Text>
                </Pressable>
            </View>
            :
            <View>
                <Image style={styles.imageBottom} source={require('./../Image/AddNewsPhoto.png')} />
            </View>
        }
        </>
      
      
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 10
  },
  plusContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonPlus: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20
  },
  textButton: {
    color: 'black',
    
  }
})