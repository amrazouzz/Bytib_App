import React from "react";
import { View, StyleSheet, ActivityIndicator, Image } from "react-native";

const Preloader = ({ isLoading, image }) => {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Image source={image} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default Preloader;
