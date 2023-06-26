import React, { Component, useContext } from "react";
import { Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import * as Icons from "react-native-heroicons/outline";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

export const SearchHeader = () => {
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
  
  const handleBack = () => {
    console.log('pressed')
    navigation.goBack()
  }
  

  return (
    <View>
          <View>
              
              
          
        {/* <View> */}
        <View className="flex-row pb-3 items-center pt-3 space-x-2 justify-center bg-white w-full">
          
        <View style={styles.backButton}>
        <Pressable
          android_ripple={{
            borderless: true,
            radius: 20,
            color: "#acccd4",
          }}
          onPress={handleBack}
        >
          {i18n.language === 'ar'?  <Icons.ArrowRightIcon
              color="#272D37"
              className="h-7 w-7 text-gray-500"
            /> :  <Icons.ArrowLeftIcon
              color="#272D37"
              className="h-7 w-7 text-gray-500"
            />}
        </Pressable>
      </View>
                  <View style={{width:'78%', backgroundColor:'#E2E2E1'}} className="flex-row items-center  rounded-xl p-2 ">
          <TouchableOpacity
              onPress={() => navigation.navigate('searchScreen')}
              android_ripple={{
                borderless: true,
                radius: 20,
                color: "#acccd4",
              }}
            >
              <Icons.MagnifyingGlassIcon
                color="#000"
                className="h-5 w-5 text-gray-500"
              />
            </TouchableOpacity>
            <TextInput
              placeholder={t('search')}
              placeholderTextColor="#000"
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
                color="#000"
                className="h-5 w-5 text-gray-500"
              />
            </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    backButton: {
        backgroundColor: "#F8F9F9",
        borderRadius: 16,
        padding: 8,
        marginRight: 16,
        left: 10,
        direction: 'ltr',
      },
})

export default SearchHeader;
