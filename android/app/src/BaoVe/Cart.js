import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const Cart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imageClose} source={require('./../Image/close.png')}/>
        <Text style={styles.textHeader}>Cart</Text>
        <Image style={styles.imageTrash} source={require('./../Image/trash.png')}/>
      </View>
      <View style={styles.mgContainer}>
        <View style={styles.itemProduct}>
            <View style={styles.imageItemProductContainer}>
                <Image style={styles.imageItemProduct} source={require('./../Image/item1.png')}/>    
            </View>
            <View style={styles.text}>
                <Text style={styles.textName}>Diet Coke</Text>
                <Text style={styles.textCapacity}>355ml</Text>
                <Text style={styles.textPrice}>$2.99</Text>
            </View>
            <View style={styles.numberContainer}>
                <Image style={styles.imageMinus} source={require('./../Image/trashXanh.png')}/>
                <Text style={styles.textNumber}>1</Text>
                <Image style={styles.imagePlus} source={require('./../Image/plus.png')}/>
            </View>
        </View>
        <Pressable style={styles.buttonCheckout}>
            <Text style={styles.textButtonPrice}>$12</Text>
            <Text style={styles.textCheckout}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    mgContainer: {
        marginHorizontal: 14
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
        marginHorizontal: 140
    },
    itemProduct: {
        flexDirection: 'row',
    },
    imageItemProductContainer: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        width: 80,
        height: 80,
        justifyContent: 'center',
        marginTop: 20
    },
    imageItemProduct: {
        alignSelf: 'center'
    },
    text: {
        marginLeft: 10
    },
    textName: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 23
    },
    textCapacity: {
        color: 'black',
        fontSize: 14,
        opacity: 0.4,
        marginTop: 2.3
    },
    textPrice: {
        color: '#52CC6D',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 6.66
    },
    textNumber: {
        color: 'white',
        fontSize: 16,
        backgroundColor: '#52CC6D',
        padding: 10 ,
        width: 35,
        height: 38
    },
    numberContainer: {
        flexDirection: 'row',
        borderRadius: 16,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        width: 130,
        height: 40,
        marginLeft: 70,
        marginTop: 20,
        alignSelf: 'center'
    },
    imageMinus: {
        alignSelf: 'center',
        left: 18,
        marginRight: 35
    },
    imagePlus: {
        alignSelf: 'center',
        left: 12,
    },
    buttonCheckout: {
        backgroundColor: '#52CC6D',
        flexDirection: 'row',
        height: 55,
        borderRadius: 15,
        marginTop: 580
    },
    textButtonPrice: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 80,
        paddingTop: 17,
        borderWidth: 1,
        borderBottomColor: '#E0E0E0',
        borderTopColor: '#E0E0E0',
        borderLeftColor: '#E0E0E0',
        borderRightColor: '#52CC6D',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    textCheckout: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 17,
        left: 110,
    }
})