import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import ImageCarousel from "../components/home/ImageCarousel";
import Header from "../components/home/Header";
import NavBar from "../components/home/NavBar";
import CategoriesCarousel from "../components/home/CategoriesCarousel";
import DoctorsCarousel from "../components/home/DoctorsCarousel";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useTranslation } from "react-i18next";
import CustomText from "../components/common/CustomText";

const HomeScreen = () => {
  const { t, i18n } = useTranslation();

  const navigation = useNavigation();
  useEffect(() => {
    let loggedIn = AsyncStorage.getItem("AccessToken");
    if (!loggedIn) {
      navigation.navigate("loginScreen");
    }
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eaf5fa" }}>
    <Header />
      <ScrollView>
        {/* Header */}
        <View>

          {/* Body */}

          <View className="px-5">
            <ImageCarousel />
          </View>

          {/* Category */}
          <View className="px-5 mb-0">
            {i18n.language === "ar" ? (
              <View className="mt-5 flex flex-row justify-between mb-4">
                <CustomText
                  onPress={() => navigation.navigate("categories")}
                  className=" text-lg"
                >
                  {t("seeAll")}
                </CustomText>
                <CustomText className="text-2xl" bold>
                  {t("categoryTitle")}
                </CustomText>
              </View>
            ) : (
              <View className="mt-5 flex flex-row justify-between mb-4">
                <CustomText className="text-2xl  " bold>
                  {t("categoryTitle")}
                </CustomText>
                <CustomText
                  onPress={() => navigation.navigate("categories")}
                  className="  text-lg"
                >
                  {t("seeAll")}
                </CustomText>
              </View>
            )}

            <View>
              <CategoriesCarousel />
            </View>
          </View>

          {/* Doctors */}
          <View className="py-2 px-5">
            {i18n.language === "ar" ? (
              <View className=" flex flex-row justify-between mb-4 mt-2">
                <CustomText
                  className="  text-lg"
                >
                  {t("seeAll")}
                </CustomText>
                <CustomText className="text-2xl  " bold>{t("topRated")}</CustomText>
              </View>
            ) : (
              <View className=" flex flex-row justify-between mb-4 mt-2">
                <CustomText className="text-2xl  " bold>{t("topRated")}</CustomText>
                <CustomText
                  
                  className="  text-lg"
                >
                  {t("seeAll")}
                </CustomText>
              </View>
            )}

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
