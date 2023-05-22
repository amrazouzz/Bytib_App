import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Header from '../../components/auth/Header';

const BookingFaild = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);



  return (
    <View style={{flex: 1, backgroundColor: "#eaf5fa"}}>
      <Header />

    <View style={styles.container} >
    <Image style={styles.image} source={require('../../assets/images/booking/fail.png')} />
    <Text className='font-extrabold pt-8 pb-2 text-xl px-24'>An Error Occurred</Text>
    <Text className='px-12 text-center'>This time has been booked by another user, please choose another time</Text>

    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.button}>BACK </Text>
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
  marginTop:'30%',
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

export default BookingFaild