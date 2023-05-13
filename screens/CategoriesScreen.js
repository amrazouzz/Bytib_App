import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/categories/Header";
import { API_URL } from "../api/api";
import { Card, Title, Paragraph } from 'react-native-paper';

const CategoriesScreen = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    fetch(`${API_URL}/categories`)
      .then((response) => response.json())
      .then((data) => {
        // Handle API response
        setCategories(data.results);
      });
  };

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleCategoryPress = (categoryId, categoryName) => {
    navigation.navigate("categoryDoctors", { categoryId, categoryName });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eaf5fa" }}>
      {/* Header */}
      <Header />

      {/* Body list */}
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => handleCategoryPress(category.id, category.name)}
            >
              <Card style={styles.card}>
                {category.photo ? (
                  <Card.Cover style={styles.cardImage} source={{ uri: category.photo }} />
                ) : (
                  <Card.Cover style={styles.cardImage} source={{ uri: "https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }} />
                )}
                <Card.Content style={[styles.cardContent, { zIndex: 1 }]}>
                  <View style={styles.roundedBox}>
                    <Title className="text-center font-extrabold text-sm">
                      {category.name}
                    </Title>
                    <Paragraph className="text-center font-light text-sm">
                      {category.doctors_count} Doctors
                    </Paragraph>
                  </View>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    margin: 10,
    width: 160,
    height: 200,
    overflow: "hidden",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  cardContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  roundedBox: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 10,
  },
});

export default CategoriesScreen;
