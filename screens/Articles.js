import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/articles/Header";
import ArticlesData from "../components/articles/Articles";
import ArticlesList from "../components/articles/ArticalesList";
import ArticlesCarousel from "../components/articles/ArticleCarousel";

const data = ArticlesData;

const Articles = () => {
  const navigation = useNavigation();

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
        <View>
          <Text className="pt-5 px-5 mb-0 text-xl font-extrabold">
            Recommend
          </Text>
        </View>
        <View className="pt-5 px-5 mb-0">
          <View>
            <ArticlesCarousel />
          </View>
        </View>
        <View className="pt-5 px-5 mb-0">
          <View className="mt-7 flex flex-row justify-between">
            <Text className="text-xl font-extrabold">New Articles</Text>
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
