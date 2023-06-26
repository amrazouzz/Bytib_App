import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Modal, Button, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from 'react-native-heroicons/solid';

const DoctorRate = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [selectedRatings, setSelectedRatings] = useState([0, 0, 0, 0]);
  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleRatePress = (index, rating) => {
    setSelectedRatings((prevRatings) => {
      const newRatings = [...prevRatings];
      newRatings[index] = rating;
      return newRatings;
    });
  };

  const calculateAverageRating = () => {
    const sum = selectedRatings.reduce((total, rating) => total + rating, 0);
    const average = sum / selectedRatings.length;
    return average.toFixed(1);
  };

  const handleContinuePress = () => {
    setModalVisible(true);
  };

  const handleBackToHome = () => {
    setModalVisible(false);
    navigation.navigate('home');   };

  const renderStar = (itemIndex, starIndex, rating) => {
    const filledStar = starIndex < rating ? '#FFD855' : '#EFF3FA';
  
    return (
      <TouchableOpacity
        key={`${itemIndex}-${starIndex}`} // Use unique key for each star
        onPress={() => handleRatePress(itemIndex, starIndex + 1)} // Add 1 to starIndex
        style={styles.starContainer}
      >
        <Icon.StarIcon color={filledStar} size={40} />
      </TouchableOpacity>
    );
  };
  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#528DA7' }}>
      <StatusBar barStyle="light-content" backgroundColor="#528DA7" />
      <View style={styles.header}>
        <Text style={styles.headerTxt}>{t('doctorRate')}</Text>
      </View>
      <View style={styles.backBtnC}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon.ArrowLeftIcon size={25} color={'#000'} style={styles.backBtn} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.imageContainer}></View>
        <Text style={styles.drName}>Dr. Victor Le Roy</Text>

        <View style={styles.ratingContainer}>
          <View style={styles.rateItem}>
            <Text style={styles.rateDesc}>Rate Description 1</Text>

            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((index) =>
                renderStar(0, index, selectedRatings[0])
              )}
            </View>
          </View>
          <View style={styles.rateItem}>
            <Text style={styles.rateDesc}>Rate Description 2</Text>

            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((index) =>
                renderStar(1, index, selectedRatings[1])
              )}
            </View>
          </View>
          <View style={styles.rateItem}>
            <Text style={styles.rateDesc}>Rate Description 3</Text>

            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((index) =>
                renderStar(2, index, selectedRatings[2])
              )}
            </View>
          </View>
          <View style={styles.rateItem}>
            <Text style={styles.rateDesc}>Rate Description 4</Text>

            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map((index) =>
                renderStar(3, index, selectedRatings[3])
              )}
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={handleContinuePress}>
          <Text style={styles.btn}>{t('continue')}</Text>
        </TouchableOpacity>
      </View>

      {/* Floating Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
<Image style={styles.modalImage} source={require('../../assets/images/rateDr/icon.png')} />
                      <View style={styles.modalStarsContainer}>
              {[1, 2, 3, 4, 5].map((index) =>
                renderStar(index, index, calculateAverageRating())
              )}
            </View>
                      <Text style={styles.modalThanksText}>{t('thanksRating') }</Text>
                      <TouchableOpacity onPress={handleBackToHome}>
                          <Text style={styles.modalBtn}>{t('backHome')}</Text>
                      </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },
  backBtn: {},
  backBtnC: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#F8F9F9',
    width: 35,
    marginHorizontal: 10,
    marginTop: 5,
    bottom: 40,
  },
  headerTxt: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    top: 5,
  },
  container: {
    marginTop: 90,
    backgroundColor: '#fff',
    height: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
  },
  imageContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#EFF3FA',
    borderRadius: 20,
    bottom: 60,
  },
  drName: {
    fontSize: 22,
    bottom: 45,
  },
  ratingContainer: {
    bottom: 20,
  },
  rateDesc: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  rateItem: {
    marginBottom: 15,
  },
  starContainer: {
    marginRight: 10,
  },
  btn: {
    backgroundColor: '#528DA7',
    color: '#fff',
    paddingHorizontal: '30%',
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: '600',
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  modalStarsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  modalThanksText: {
    fontSize: 16,
      marginBottom: 20,
      paddingHorizontal: 80,
    textAlign:'center'
    },
    modalImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop: 10,
        marginBottom: 30
    },
    modalBtn: {
        marginVertical: 20,
        paddingVertical: 10,
        paddingHorizontal: '25%',
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        backgroundColor: '#528DA7',
        borderRadius: 5
    }
});

export default DoctorRate;
