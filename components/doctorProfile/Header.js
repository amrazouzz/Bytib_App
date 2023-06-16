import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Icons from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

export default function Header() {
  const navigation = useNavigation();
  const {t,i18n} = useTranslation();

  const handleBack = () => {
    console.log('pressed')
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
    {/* Back Button */}
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
            color="#ffffff"
            className="h-7 w-7 text-gray-500"
          /> :  <Icons.ArrowLeftIcon
            color="#ffffff"
            className="h-7 w-7 text-gray-500"
          />}
      </Pressable>
    </View>
    {/* Title */}
    <Text style={styles.title}>{t('drHeader')}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    elevation: 4,
    height: 56,
    paddingHorizontal: 16,
    direction:'ltr'
  },
  backButton: {
    backgroundColor: "#509ca4",
    borderRadius: 16,
    padding: 8,
    marginRight: 16,
    position: 'absolute',
    left: 10,
    direction:'ltr'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
