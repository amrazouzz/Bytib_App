import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';

const OnlineDrsCarousel = () => {
  const data = [
    { name: 'Doctor 1', online: true },
    { name: 'Doctor 2', online: false },
    { name: 'Doctor 3', online: true },
    { name: 'Doctor 4', online: true },
    { name: 'Doctor 5', online: false },
    { name: 'Doctor 6', online: true },
    { name: 'Doctor 7', online: false },
    { name: 'Doctor 8', online: true },
    { name: 'Doctor 9', online: true },
  ];

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {data.map((doctor, index) => (
        <View key={index} style={styles.doctorContainer}>
          <View style={styles.drContainer} >
          <ImageBackground
            source={require('../../assets/images/home/img-7.png')}
            style={styles.circle}
            imageStyle={{ borderRadius: 25 }}
          >
            <View
              style={[
                styles.onlineIndicator,
                { backgroundColor: doctor.online ? '#7ED321' : '#D0021B' },
              ]}
            />
          </ImageBackground>

          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  doctorContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  drContainer:{
    borderWidth: 2,
    borderColor: '#504DE5',
    borderRadius:50,
  },
  circle: {
    width: 50,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  onlineIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

export default OnlineDrsCarousel;
