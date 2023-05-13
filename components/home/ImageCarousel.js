import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Dimensions, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import ImagedCarouselCard from "react-native-imaged-carousel-card";

const { width } = Dimensions.get("window");
const imageWidth = width * 0.7;
const imageHeight = imageWidth * 0.6;

const images = [
  { id: 0, source: require("../../assets/home/firstCarousel/doctor1.jpg") },
  { id: 1, source: require("../../assets/home/firstCarousel/doctor2.jpg") },
  { id: 2, source: require("../../assets/home/firstCarousel/doctor3.jpg") },
];

const ImageCarousel = () => {

 

  return (
    <View style={styles.container}>

      <ImagedCarouselCard  width={imageWidth} height={imageHeight}
  shadowColor="#051934" source={images.source} style={{ marginTop: 10 }}/>


    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: "contain",
    borderRadius: 10,
  },
  circlesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  scrollView: {
    height: 200,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default ImageCarousel;
