import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    Image,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import React, { useLayoutEffect, useEffect, useState } from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import Icon from "react-native-vector-icons/MaterialCommunityIcons";
  import { useTranslation } from "react-i18next";
  import { HeartIcon, ShareIcon } from 'react-native-heroicons/outline'; // Import the desired Hero Icons
import CommonHeader from "../../components/common/CommonHeader";
  
  const PharmacyScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {t,i18n} = useTranslation();
  
    
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [navigation]);
  
    const renderRatingStars = (rating) => {
      const stars = [];
      for (let i = 0; i < rating; i++) {
        stars.push(<Icon key={i} name="star" size={20} color="#528DA7" />);
      }
      if (stars.length >= 0) {
        return <Text> لا توجد تقييمات بعد</Text>;
      }
      return stars;
    };
    const handleBookingPress = () => {

    }
  
  
   
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#eaf5fa" }}>
        <StatusBar barStyle="dark-content" backgroundColor="#eaf5fa" />
        <CommonHeader headerTilte='pharmacyName' />
        <View style={{ flex: 1 }}>
        <View style={{flexDirection:'row', paddingHorizontal:25, paddingVertical:10}}>
          
          <TouchableOpacity >
            <ShareIcon style={styles.icon} size={24} color="#000" />
          </TouchableOpacity>
  
          <TouchableOpacity >
            <HeartIcon style={{marginHorizontal:10}} size={24} color="#000" />
          </TouchableOpacity>
        </View>
  
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              
              <Image
              style={styles.doctorImage}
              source={require('../../assets/images/pharmacy/pharmacy.png')}
            />
            </View>
            <View style={styles.infoContainer}>
             
              <View style={styles.ratingContainer}>
                {renderRatingStars(4)}
              </View>
              
            </View>
  
            {/* body */}
              {/* map */}

  
            <View>
              <Text className='pt-10'>About section</Text>
            </View>
  
  
            <View>
              <Text className='pt-10'>Reviews section</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      flex: 1,
      alignItems: "center",
    },
    imageContainer: {
      width: '90%',
      height: 200,
      borderRadius:10,

      backgroundColor: "#504DE5",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
      overflow:'hidden'
    },
    doctorImage: {
width: '100%',
height: '100%',
    },
    infoContainer: {
      alignItems: "center", 
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5,
    },
    category: {
      fontSize: 16,
      marginBottom: 10,
    },
    ratingContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    rating: {
      marginLeft: 5,
      fontSize: 16,
    },
    button: {
      backgroundColor: "#528DA7",
      paddingVertical: 15,
      paddingHorizontal: '28%',
      borderRadius: 5,
      marginBottom: 20,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
  
  export default PharmacyScreen;
  