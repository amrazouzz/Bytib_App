import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as Icons from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

export default function AppointmentHeader() {
  const navigation = useNavigation();
  const {t,i18n} = useTranslation();

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
          onPress={() => navigation.goBack()}
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
      <Text className='font-extrabold' style={styles.title}>{t('bookHeader')}</Text>
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
  },
  backButton: {
    backgroundColor: "#509ca4",
    borderRadius: 16,
    padding: 8,
    marginRight: 16,
    position: 'absolute',
    left: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "300",
    color: "black",
  },
});
