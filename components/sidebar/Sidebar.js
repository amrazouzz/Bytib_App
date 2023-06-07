import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Share } from 'react-native';


const Sidebar = () => {
    const navigation = useNavigation()
    const {t} = useTranslation()

    const handleLogoutPress = () => {
        console.log('loggedOut')
        AsyncStorage.removeItem('AccessToken');
        AsyncStorage.removeItem('userInfo');
        navigation.navigate('onBoarding');
      }



      const handleShare = async () => {
        try {
          const shareOptions = {
            title: `${t('shareTitle')}`,
            message:`${t('shareMessage')}`
          };
          const result = await Share.share(shareOptions);
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // Shared with activity type of result.activityType
              console.log('Shared with activity type of result.activityType');
            } else {
              // Shared
              console.log('Shared');
            }
          } else if (result.action === Share.dismissedAction) {
            // Dismissed the share dialog
            console.log('Dismissed the share dialog');
          }
        } catch (error) {
          console.log('shareErr', error);
        }
    };      
      
      
      
      
      
    return (
    <View style={styles.container}>
    {/* Drawer */}

      <ScrollView style={styles.drawer}>
        
        <View style={styles.Link}>
            <View style={styles.LinkIconContainer} ><Image style={styles.LinkIcon}  source={require('../../assets/images/sidebar/Profile.png')} /></View>
            <Link style={styles.LinkText} to='/myProfile'>{t('sbProfile')}</Link>
        </View>
        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image className='h-7 w-7' source={require('../../assets/images/sidebar/30-appointment.png')} />
                </View>
            <Link style={styles.LinkText} to='/home'>{t('sbAppointments')}</Link>
        </View>
        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image style={styles.LinkIcon} source={require('../../assets/images/sidebar/Paper.png')} /></View>
            <Link style={styles.LinkText} to='/home'>{t('sbReports')}</Link>
        </View>

        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image className='h-6 w-8' source={require('../../assets/images/sidebar/family.png')} /></View>
            <Link style={styles.LinkText} to='/home'>{t('sbFamily')}</Link>
        </View>

        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image style={styles.LinkIcon} source={require('../../assets/images/sidebar/location.png')} /></View>
            <Link style={styles.LinkText} to='/home'>{t('sbPharmacies')}</Link>
        </View>

        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image className='h-6 w-7' source={require('../../assets/images/sidebar/Message.png')} /></View>
            <Link style={styles.LinkText} to='/home'>{t('sbInbox')}</Link>
        </View>

        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image className='h-6 w-6' source={require('../../assets/images/sidebar/Setting.png')} /></View>
            <Link style={styles.LinkText} to='/home'>{t('sbSettings')}</Link>
        </View>

        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image className='h-6 w-6' source={require('../../assets/images/sidebar/about.png')} /></View>
            <Link style={styles.LinkText} to='/about'>{t('sbAbout')}</Link>
        </View>

        <Pressable onPress={handleShare}>
        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image className='h-6 w-6' source={require('../../assets/images/sidebar/Shape.png')} /></View>
            <Text style={styles.LinkText} >{t('sbShare')}</Text>
        </View>
        </Pressable>

        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image className='h-6 w-7' source={require('../../assets/images/sidebar/Star.png')} /></View>
            <Link style={styles.LinkText} to='/home'>{t('sbRate')}</Link>
        </View>


        <View style={styles.Link}>
            <View style={styles.LinkIconContainer}>
                <Image className='h-6 w-6' source={require('../../assets/images/sidebar/Calling.png')} /></View>
            <Link style={styles.LinkText} to='/home'>{t('sbContact')}</Link>
        </View>

        <Pressable onPress={handleLogoutPress}>
        <View style={styles.Link} >
            <View style={styles.LinkIconContainer} >
                <Image className='h-6 w-6' source={require('../../assets/images/sidebar/Logout.png')} /></View>
            <Text style={styles.LinkText}>{t('sbLogout')}</Text>
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