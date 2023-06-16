import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/articles/Header";
import ArticlesData from "../components/articles/Articles";
import ArticlesList from "../components/articles/ArticalesList";
import ArticlesCarousel from "../components/articles/ArticleCarousel";
import { useTranslation } from "react-i18next";

const data = ArticlesData;

const Articles = () => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eaf5fa" }}>
      {/* Header */}
      <Header />

      {/* Article list */}
      <ScrollView style={{ flex: 1 }}>
        <View className={`mt-7 flex flex-row${i18n.language === 'ar' ? ' justify-end' : ''}`}>
          <Text className="pt-5 px-5 mb-0 text-xl font-extrabold">
            {t('articlesRecommend')}
          </Text>
        </View>
        <View className="pt-5 px-5 mb-0">
          <View>
            <ArticlesCarousel />
          </View>
        </View>
        <View className="pt-5 px-5 mb-0">
          <View className={`mt-7 flex flex-row${i18n.language === 'ar' ? ' justify-end' : ''}`}>
            <Text className="text-xl font-extrabold">{t('articlesNew')}</Text>
          </View>
          <View>
            <ArticlesList />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Articles;
