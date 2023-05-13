import React, { Component } from "react";
import { Pressable, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import * as Icons from "react-native-heroicons/outline";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Header = () => {
  const navigation = useNavigation();
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
              onPress={() => console.log("List button pressed")}
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
