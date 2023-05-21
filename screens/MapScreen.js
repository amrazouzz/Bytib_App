import { View, Text } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "../components/home/NavBar";
import { StyleSheet } from "react-native";
import MapHeader from "../components/map/MapHeader";
import Map from "../components/map/Map";

const MapScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    let loggedIn = AsyncStorage.getItem("AccessToken");
    if (!loggedIn) {
      navigation.navigate("loginScreen");
    }
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eaf5fa" }}>
      <MapHeader />

      <View style={styles.container}>
        <Map />
      </View>
      
      <NavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default MapScreen;
