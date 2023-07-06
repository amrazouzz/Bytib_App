import React from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import * as Icons from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  const navigation = useNavigation();
  const {t,i18n} = useTranslation();

  return (
    <SafeAreaView>
    <View style={styles.container}>
      {/* Title */}
      <Text className='font-extrabold' style={styles.title}>{t('favHeader')}</Text>
    </View>
    </SafeAreaView>
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
  
