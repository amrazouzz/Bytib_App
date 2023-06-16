import { View, Text, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import CommonHeader from '../components/common/CommonHeader';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const About = () => {
    const navigation = useNavigation();
    const {t} = useTranslation();




    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, [])
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#EAF5FA'}}>
        <CommonHeader headerTilte={t('aboutHeader')} />

       <ScrollView>
       <View style={styles.logoContainer}>
       <Image source={require('../assets/images/logo.png')} style={styles.logo} />
       </View>
      <Text style={styles.about}>{t('aboutText')}</Text>
       </ScrollView>
    </SafeAreaView>
  )
}


const styles= StyleSheet.create({
    logoContainer:{
        width:140.5,
        height:55,
        alignSelf: 'center',
        marginVertical:30,
        marginBottom:50
    },
    logo:{
        width: '100%',
        height:'100%',
        alignSelf: 'center',
    },
    about:{
        fontSize: 21,
        paddingHorizontal: 15,
        fontWeight:'500',
    }
})

export default About