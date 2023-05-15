import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Icons from "react-native-heroicons/outline";
import ImageCarousel from "../components/home/ImageCarousel";
import NavBar from "../components/home/NavBar";
import CategoriesCarousel from "../components/home/CategoriesCarousel";
import DoctorsCarousel from "../components/home/DoctorsCarousel";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../components/chat/Header";
import OnlineDrsCarousel from "../components/chat/OnlineDrsCarousel";
import ChatsCarousel from "../components/chat/ChatsCarousel";

const ChatScreen = () => {
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
        <View>

          {/* <Header /> */}
          <Header />

          {/* Body */}

            {/* Online Drs */}
          <View className="px-5">
            <Text className='font-extrabold text-xl mb-4 mt-3'>Online Doctors</Text>
            <OnlineDrsCarousel />
          </View>

          {/* Chats */}
          <View className="px-5 mb-0 mt-5">
            <ChatsCarousel />
          </View>
    </View>

        {/* bottom nav */}

      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
};

export default ChatScreen;
