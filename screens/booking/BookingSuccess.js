import { View, Text, Image } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { BackHandler } from 'react-native';
import { useTranslation } from 'react-i18next';

const BookingSuccess = () => {
  const navigation = useNavigation();
  const {t} = useTranslation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    const backAction = () => {
      return true; // Disable the default back button behavior
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove(); // Clean up the event listener

  }, []);


  return (
    <View style={{flex: 1, backgroundColor: "#eaf5fa"}}>

      <View style={styles.container} >
      <Image style={styles.image} source={require('../../assets/images/booking/success.png')} />
      <Text className='font-extrabold pt-8 pb-2 text-xl px-24'>{t('bookErr')}</Text>
      <Text className='px-10 text-center'>{t('bookSuccessDesc')}</Text>

      <TouchableOpacity onPress={() => navigation.navigate('home')}>
        <Text style={styles.button}>{t('done')}</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({

  container:{
    alignItems:'center',
    justifyContent:'center',
  },
  image:{
    marginTop:'35%',
    width:210,
    height:210
  },
  button:{
    marginTop:'20%',
    padding:10,
    backgroundColor:'#528DA7',
    color:'#fff',
    borderRadius:5,
    width:'80%', 
    paddingHorizontal:120,
    paddingVertical:15,
    fontWeight:'900'
    
    
  }
})
export default BookingSuccess