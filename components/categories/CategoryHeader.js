import React, { Component, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import * as Icons from "react-native-heroicons/outline";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Header = ({ onSelectOption }) => {
  const [showOptions, setShowOptions] = useState(false);
  const navigation = useNavigation();

  const handleDropdownClick = () => {
    setShowOptions(!showOptions);
  };


  const handleOptionSelect = (option) => {
    onSelectOption(option);
    setShowOptions(false);
  };

  return (
    <View>
      <View>
        <View className="flex-row pb-3 items-center pt-3 space-x-2 justify-center bg-white w-full">
{/* Back Button */}
    <View style={styles.backButton}>
        <Pressable
          android_ripple={{
            borderless: true,
            radius: 20,
            color: "#acccd4",
          }}
          onPress={() => navigation.goBack()}
        >
          <Icons.ArrowLeftIcon
            color="#ffffff"
            className="h-7 w-7 text-gray-500"
          />
        </Pressable>
      </View>





          <View className="flex-row items-center bg-gray-200 rounded-full p-2 w-3/5">
            <TextInput
              placeholder="Search"
              placeholderTextColor="gray"
              style={{
                marginLeft: 10,
                fontSize: 16,
                fontWeight: "500",
                color: "black",
                flex: 1,
              }}
            />
            <TouchableOpacity
              onPress={() => console.log("Search button pressed")}
              android_ripple={{
                borderless: true,
                radius: 20,
                color: "#acccd4",
              }}
            >
              <Icons.MagnifyingGlassIcon
                color="#509ca4"
                className="h-5 w-5 text-gray-500"
              />
            </TouchableOpacity>
          </View>
          <View className="flex-row space-x-3">
            
            <TouchableOpacity
              onPress={handleDropdownClick}
              android_ripple={{
                borderless: true,
                radius: 20,
                color: "#acccd4",
              }}
            >
              <Icons.FunnelIcon
                color="#509ca4"
                className="h-7 w-7  text-blue-300 left-4"
              />
            </TouchableOpacity>
          </View>
          
        </View>
      </View>

      {showOptions && (
        <View style={{backgroundColor:'#F1F1F2', }} className='py-10 mx-5 alignItem-center px-10'>
          {/* Render your dropdown options here */}
          <TouchableOpacity onPress={() => handleOptionSelect('option1')} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 2 }}>
          <View style={{ width: 10, height: 10, borderRadius: 5, borderWidth: 1, borderColor: '#528DA7', marginRight: 10 }} />
            <Text className='text-lg py-2'>Nearby Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionSelect('option2')} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 2 }}>
          <View style={{ width: 10, height: 10, borderRadius: 5, borderWidth: 1, borderColor: '#528DA7', marginRight: 10 }} />
            <Text className='text-lg py-2'>Top Rated Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionSelect('option3')} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 2 }}>
          <View style={{ width: 10, height: 10, borderRadius: 5, borderWidth: 1, borderColor: '#528DA7', marginRight: 10 }} />
          <Text className='text-lg py-2'>Open Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOptionSelect('option4')} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 2 }}>
          <View style={{ width: 10, height: 10, borderRadius: 5, borderWidth: 1, borderColor: '#528DA7', marginRight: 10 }} />
          <Text className='text-lg py-2'>Most Searched Doctor</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffffff",
      elevation: 4,
      height: 56,
      paddingHorizontal: 0,
    },
    backButton: {
      backgroundColor: "#509ca4",
      borderRadius: 16,
      padding: 8,
      marginRight: 16,
      position: 'absolute',
      left: 10,
    },
});
export default Header;
