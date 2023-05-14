import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ imageSource, title, description, onPress }) => {
  const navigation = useNavigation();
  useEffect(() => {
    AsyncStorage.getItem("AccessToken")
      .then(loggedIn => {
        if (loggedIn) {
          navigation.navigate('home')
        }
      });
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imageSource} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Pagination numberOfDots={3} activeDotIndex={1} />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const Pagination = ({ numberOfDots, activeDotIndex }) => {
    const dots = [];
  
    for (let i = 0; i < numberOfDots; i++) {
      dots.push(
        <View
          key={i}
          style={[
            styles.dot,
            i === activeDotIndex && styles.activeDot,
          ]}
        />
      );
    }
  
    return (
      <View style={styles.pagination}>
        {dots}
      </View>
    );
  };

const OnboardingTow = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('onBoardingThree')
}
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={styles.container}>
      <OnboardingScreen
        imageSource={require('../../assets/images/onBoarding/onboarding2.jpg')}
        title="Description of Screen 2"
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf5fa',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50,
    borderBottomLeftRadius: 50,
    overflow: 'hidden',
    width: '100%',
    height: '75%', // increase the height of the image container
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // add resizeMode to maintain aspect ratio of image
    borderBottomLeftRadius: 300, // add border radius to bottom left of image
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom:25
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#509ca4',
    borderRadius: 10,
    padding: 15,
    paddingHorizontal: 120,
    marginTop: 10,
    bottom: 0,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  dot: {
    width: 40,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#509ca4',
  },
});

export default OnboardingTow;
