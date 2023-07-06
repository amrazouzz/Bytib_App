import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/home/NavBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../components/fav/Header";
import DrCarousel from "../components/fav/DrCarousel";

const FavScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
   let loggedIn = AsyncStorage.getItem('AccessToken')
   if (!loggedIn) {
    navigation.navigate('loginScreen')
   }
  }, )

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eaf5fa" }}>
      <ScrollView>
        <Header />
        <View>
          {/* <Header /> */}

          {/* Body */}


          {/* Fav */}
          <View className="px-5 mt-5">
            
            <DrCarousel />
          </View>
    </View>

        {/* bottom nav */}

      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
};

export default FavScreen;
