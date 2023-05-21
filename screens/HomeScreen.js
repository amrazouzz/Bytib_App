import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";
import ImageCarousel from "../components/home/ImageCarousel";
import Header from "../components/home/Header";
import NavBar from "../components/home/NavBar";
import CategoriesCarousel from "../components/home/CategoriesCarousel";
import DoctorsCarousel from "../components/home/DoctorsCarousel";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";

const HomeScreen = () => {
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
        {/* Header */}
        <View>
          <Header />

          {/* Body */}

          <View className="px-5">
            <ImageCarousel />
          </View>

          {/* Category */}
          <View className="px-5 mb-0">
            <View className="mt-5 flex flex-row justify-between mb-4">
              <Text className="text-2xl font-extrabold">Category</Text>
              <Text onPress={()=>navigation.navigate('categories')} className="font-light text-lg">See All</Text>
            </View>
            <View>
              <CategoriesCarousel />
            </View>
          </View>

          {/* Doctors */}
          <View className="py-2 px-5">
            <View className=" flex flex-row justify-between mb-4 mt-2">
              <Text className="text-2xl font-extrabold">Top Rated</Text>
              <Text className="font-light text-lg">See All</Text>
            </View>
            <View>
             
              <DoctorsCarousel />

            </View>
          </View>
        </View>

        {/* bottom nav */}

      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
};

export default HomeScreen;
