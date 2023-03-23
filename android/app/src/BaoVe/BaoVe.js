import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const BaoVe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imageArrow} source={require('./../Image/arrow.png')}/>
        <Text style={styles.textHeader}>Product Details</Text>
        <Image style={styles.imageHear} source={require('./../Image/hear.png')}/>
      </View>
      <View style={styles.mgContainer}>
        <Image style={styles.imageProduct} source={require('./../Image/image1.png')}/>
        <Text style={styles.textPrice}>$0.99</Text>
        <Text style={styles.textName}>Eti Browni Intense</Text>
        <Text style={styles.textGam}>50g</Text>
        <Text style={styles.textProductDetail}>Product Details</Text>
        <Text style={styles.textContent}>
            Soft moist cake, intense chocolate and delicious chocolate coating… You never know when and under what conditions the Browni Intense Crisis will come… What happens, what happens; there is too much somewhere.
        </Text>
        <Pressable style={styles.buttonCart}>
            <Text style={styles.textCart}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default BaoVe

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    mgContainer: {
        margin: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 8,
        marginTop: 10
    },
    textHeader: {
        color: 'black',
        fontSize: 20,
        marginHorizontal: 100
    },
    imageProduct: {
        alignSelf: 'center',
        marginTop: 20
    },
    textPrice: {
        color: '#52CC6D',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15
    },
    textName: {
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10
    },
    textGam: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
        opacity: 0.4
    },
    textProductDetail: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 30
    },
    textContent: {
        fontSize: 16,
        color: '#7C7C7C',
        marginTop: 10,
        lineHeight: 21
    },
    buttonCart: {
        backgroundColor: '#52CC6D',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 210
    },
    textCart: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})