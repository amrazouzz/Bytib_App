import React, { Component, useContext } from "react";
import { Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import * as Icons from "react-native-heroicons/outline";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const navigation = useNavigation();
  const {t,i18n} = useTranslation();




  const handleMicPress = async () => {
    try {
      if (!window.webkitSpeechRecognition) {
        console.log("Speech recognition not supported on this device.");
        return;
      }
  
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = "en-US";
      recognition.start();
  
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchText(transcript);
      };
  
      recognition.onend = () => {
        console.log("Speech recognition ended");
      };
    } catch (error) {
      console.log("Error occurred during speech recognition.", error);
    }
  };
  
  

  return (
    <View>
      <View style={{ marginTop: StatusBar.currentHeight }}>
        {/* <View> */}
        <View className="flex-row pb-3 items-center pt-3 space-x-2 justify-center bg-white w-full">
          <View className="flex-row items-center bg-gray-300 rounded-xl p-2 w-3/4">
          <TouchableOpacity
              onPress={() => console.log("Search button pressed")}
              android_ripple={{
                borderless: true,
                radius: 20,
                color: "#acccd4",
              }}
            >
              <Icons.MagnifyingGlassIcon
                color="#fff"
                className="h-5 w-5 text-gray-500"
              />
            </TouchableOpacity>
            <TextInput
              placeholder={t('search')}
              placeholderTextColor="white"
              style={{
                marginLeft: 10,
                fontSize: 16,
                fontWeight: "500",
                color: "black",
                flex: 1,
              }}
            />
            <TouchableOpacity
              onPress={handleMicPress}
              android_ripple={{
                borderless: true,
                radius: 20,
                color: "#acccd4",
              }}
            >
              <Icons.MicrophoneIcon
                color="#fff"
                className="h-5 w-5 text-gray-500"
              />
            </TouchableOpacity>
          </View>
          <View className="flex-row space-x-3">
            <TouchableOpacity
              onPress={() => navigation.navigate("notifications")}
              android_ripple={{
                borderless: true,
                radius: 30,
                color: "#acccd4",
              }}
            >
              <Icons.BellIcon
                color="#509ca4"
                className="h-7 w-7  text-blue-300 "
              />
            </TouchableOpacity>
            <TouchableOpacity
              android_ripple={{
                borderless: true,
                radius: 20,
                color: "#acccd4",
              }}
            >
              <Icons.ClipboardDocumentListIcon
                color="#509ca4"
                className="h-7 w-7  text-blue-300"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
