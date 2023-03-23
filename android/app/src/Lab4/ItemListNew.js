import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const ItemListNew = (props) => {
    const {data, navigation} = props;

    const ClickItem = () => {
        console.log("Click item");
        navigation.navigate("NewsDetail", {id: data._id});
    }

    return (
        <TouchableOpacity onPress={ClickItem}>
            <View style={styles.container}>
                <View style={styles.item} >
                    <Image style={styles.image} source={{ uri: data.image }} />

                    <View style={styles.column2}>
                        <Text style={styles.title}>{data.title}</Text>

                        <Text style={styles.content} numberOfLines={2} >{data.content}</Text>

                        <View style={styles.titleContainer}>
                            <Image style={styles.avt} source={require('./../Image/newsAVT.png')} />
                            <Text style={styles.name}>{data.createdBy.name}</Text>
                            <Text style={styles.time}>14m ago</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    item: {
        marginVertical: 15,
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    image: {
        width: 96,
        height: 120,
        borderRadius: 8,
    },
    column2: {
        flexDirection: 'column',
        marginLeft: 7,
        width: Dimensions.get('window').width - 120
    },
    title: {
        fontSize: 15,
        opacity: 0.7,
        color: 'black',
        marginBottom: 2,
    },
    content: {
        fontSize: 20,
        color: 'black',
        marginBottom: 2,
        width: Dimensions.get('window').width - 120
    },
    titleContainer: {
        flexDirection: 'row',
        top: 95,
        position: 'absolute'
    },
    avt: {
        borderRadius: 20,
        top: 4,
    },
    name: {
        fontWeight: 'bold',
        left: 10,
        color: 'red',
        fontSize: 17,
    },
    time: {
        opacity: 0.6,
        left: 25,
        fontSize: 17,
        color: 'black',
    }
});

export default ItemListNew