import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import News from './News';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Profile = () => {
    const TopTab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <View style={styles.mgContainer}>
        <View style={styles.header}>
            <Text style={styles.textProfile}>Profile</Text>

            <Image style={styles.imageSetting} source={require('./../Image/profileSetting.png')} />
        </View>

        <View style={styles.infoFollowContainer}>
            <View style={styles.imageAvt} />

            <View style={styles.infoFollow}>
                <View style={styles.follow}>
                    <Text style={styles.textNumber}>2156</Text>
                    
                    <Text style={styles.textFollow}>Followers</Text>
                </View>

                <View style={styles.follow}>
                    <Text style={styles.textNumber}>567</Text>

                    <Text style={styles.textFollow}>Followering</Text>
                </View>

                <View style={styles.follow}>
                    <Text style={styles.textNumber }>23</Text>

                    <Text style={styles.textFollow}>News</Text>
                </View>
            </View>
        </View>

        <Text style={styles.name}>Wilson Franci</Text>

        <Text style={styles.content}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

        <View style={styles.buttonContainer}>
            <Pressable style={styles.buttonEdit}>
                <Text style={styles.buttonTextEdit}>Edit profile</Text>
            </Pressable>

            <Pressable style={styles.buttonEdit}>
                <Text style={styles.buttonTextEdit}>Website</Text>
            </Pressable>
        </View>
        </View>
        
        <TopTab.Navigator screenOptions={{headerShown:false}}>
            <TopTab.Screen name="Screen1" component={Screen1} options={{title: "Recent"}}/>
            <TopTab.Screen name="Screen2" component={Screen2} options={{title: "News"}}/>
        </TopTab.Navigator>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    mgContainer: {
        margin: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textProfile: {
        color: 'black',
        fontSize: 16,
        left: 15,
        fontWeight: '400'
    },
    imageSetting: {
        left: 150
    },
    imageAvt: {
        width: '26%',
        height: 100,
        borderRadius: 80,
        borderColor: '#dddddd',
        borderWidth: 1,
        backgroundColor: '#EEF1F4',
        marginTop: 13,
    },
    infoFollowContainer: {
        flexDirection: 'row',
    },
    infoFollow: {
        flexDirection: 'row',
        width: '74%',
        justifyContent: 'center',
    },
    follow: {
        alignSelf: 'center',
        marginHorizontal: 15,
        marginLeft: 20
    },
    textNumber: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    textFollow: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        opacity: 0.6,
        fontWeight: '400'
    },
    name: {
        fontWeight: '600',
        color: 'black',
        fontSize: 16,
        marginTop: 16
    },
    content: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        letterSpacing: 0.12,
        lineHeight: 24,
        opacity: 0.7,
        marginBottom: 16
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonEdit: {
        width: 178,
        height: 50,
        backgroundColor: '#1877F2',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16
    },
    buttonTextEdit: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    }
})