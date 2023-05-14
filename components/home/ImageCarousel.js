import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";

const { width } = Dimensions.get("window");
const imageWidth = width * 0.7;
const imageHeight = imageWidth * 0.6;

const images = [
  { id: 0, source: require("../../assets/home/firstCarousel/doctor1.jpg") },
  { id: 1, source: require("../../assets/home/firstCarousel/doctor2.png") },
  { id: 2, source: require("../../assets/home/firstCarousel/doctor3.jpg") },
];

const ImageCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        {images.map((image, index) => (
          <Image key={index} source={image.source} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.circlesContainer}>
        {images.map((image, index) => (
          <View
            key={index}
            style={[
              styles.circle,
              { backgroundColor: index === selectedIndex ? "#333" : "#ccc" },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width,
    height: 200,
    resizeMode: "cover",
    top:10,


    borderRadius: 3,
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
    marginHorizontal: 5,
  },
  scrollView: {
    height: 200,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default ImageCarousel;
