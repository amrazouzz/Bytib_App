import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable } from 'react-native';


const Sidebar = () => {
    const navigation = useNavigation()

    const handleLogoutPress = () => {
        console.log('loggedOut')
        AsyncStorage.removeItem('AccessToken');
        AsyncStorage.removeItem('userInfo');
        navigation.navigate('onBoarding');
      }

    return (
    <View style={styles.container}>
    {/* Drawer */}

      <ScrollView style={styles.drawer}>
        
        <View style={styles.Link}>
            <View style={styles.LinkIconContainer} ><Image style={styles.LinkIcon}  source={require('../../assets/images/sidebar/Profile.png')} /></View>
            <Link style={styles.LinkText} to='/home'>My Profile</Link>
        </View>
        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image className='h-7 w-7' source={require('../../assets/images/sidebar/30-appointment.png')} />
                </View>
            <Link style={styles.LinkText} to='/home'>My Appointments</Link>
        </View>
        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image style={styles.LinkIcon} source={require('../../assets/images/sidebar/Paper.png')} /></View>
            <Link style={styles.LinkText} to='/home'>My Reports</Link>
        </View>

        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image className='h-6 w-8' source={require('../../assets/images/sidebar/family.png')} /></View>
            <Link style={styles.LinkText} to='/home'>Family Member Profile</Link>
        </View>

        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image style={styles.LinkIcon} source={require('../../assets/images/sidebar/location.png')} /></View>
            <Link style={styles.LinkText} to='/home'>Pharamcies Open</Link>
        </View>

        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image className='h-6 w-7' source={require('../../assets/images/sidebar/Message.png')} /></View>
            <Link style={styles.LinkText} to='/home'>Inbox</Link>
        </View>

        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image className='h-6 w-6' source={require('../../assets/images/sidebar/Setting.png')} /></View>
            <Link style={styles.LinkText} to='/home'>Settings</Link>
        </View>

        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image className='h-6 w-6' source={require('../../assets/images/sidebar/about.png')} /></View>
            <Link style={styles.LinkText} to='/home'>About App</Link>
        </View>

        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image className='h-6 w-6' source={require('../../assets/images/sidebar/Shape.png')} /></View>
            <Link style={styles.LinkText} to='/home'>Share App</Link>
        </View>

        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image className='h-6 w-7' source={require('../../assets/images/sidebar/Star.png')} /></View>
            <Link style={styles.LinkText} to='/home'>Rate App</Link>
        </View>

        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image className='h-6 w-6' source={require('../../assets/images/sidebar/Calling.png')} /></View>
            <Link style={styles.LinkText} to='/home'>Contact Us</Link>
        </View>

        <Pressable onPress={handleLogoutPress}>
        <View style={styles.Link} >
            <View style={styles.LinkIconContainer} >
                <Image className='h-6 w-6' source={require('../../assets/images/sidebar/Logout.png')} /></View>
            <Text style={styles.LinkText}>Log Out</Text>
        </View>
        </Pressable>

      </ScrollView>

      </View>
  )
};

const styles = StyleSheet.create({
container: {
  flex: 1,
},
content: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',

},
drawer: {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  width: '85%',
  backgroundColor: '#fff',
  padding: 20,
},
Link:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:20
},
LinkIconContainer:{
    width:20,
    height:25,
    marginRight:15
},
LinkIcon:{
    width:'115%',
    height:'115%'
},
LinkText:{
    paddingHorizontal:15,
    fontSize:18,
    fontWeight:'bold'
},
});


export default Sidebar