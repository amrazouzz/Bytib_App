import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { API_URL } from '../../api/api';
import { useNavigation } from "@react-navigation/native";

const CategoriesCarousel = () => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();
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
  const handleCategoryPress = (categoryId, categoryName) => {
    navigation.navigate("categoryDoctors", { categoryId, categoryName });
  };

  return (
    <ScrollView style={styles.ScrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
     {categories.map((category) => (
  <TouchableOpacity key={category.id} onPress={() => handleCategoryPress(category.id, category.name)}>
    <Card style={styles.card}>
      {category.photo ? (
        <Card.Cover style={styles.cardImage} source={{ uri: category.photo }} />
      ) : (
        <Card.Cover
          style={styles.cardImage}
          source={{
            uri:
              'https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
        />
      )}
      <Card.Content style={styles.cardContent}>
        <View style={styles.roundedBox}>
          <Title style={{fontWeight:'900'}} className="text-center font-extrabold text-xs">{category.name}</Title>
          <Paragraph className="text-center font-light text-xs">
            {category.doctors_count} Doctors
          </Paragraph>
        </View>
      </Card.Content>
    </Card>
  </TouchableOpacity>
))}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop:2,
    width: 120,
    marginHorizontal: 5,
    position: 'relative',
    height:170
  },
  cardImage: {
    width: '100%',
    height: 170, // Set the desired height for the image
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cardContent: {
    position: 'relative',
    zIndex: 1,
    fontSize:10,
  },
  roundedBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 10,
    top:90
  },
  ScrollView:{
    borderRadius: 10,
  }
});

export default CategoriesCarousel;
