import React from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import * as Icons from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
    <View style={styles.container}>
      {/* Title */}
      <Text className='font-extrabold' style={styles.title}>CHAT</Text>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffffff",
      elevation: -8, // increased value for shadow
      height: 56,
      paddingHorizontal: 16,
      shadowOffset: { width: 10, height: 4 },
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowRadius: 0,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "black",
    },
  });
  
