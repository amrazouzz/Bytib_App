import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { API_URL } from '../../api/api';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ArticlesCarousel = () => {
    const [articles, setArticles] = useState([]);
    const navigation = useNavigation();

  const fetchArticles = async () => {
    try {
      const response = await fetch(`${API_URL}/articles/`);
      const data = await response.json();
      setArticles(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticles();
    console.log(articles)
  }, []);
  const newArticals  = articles.slice(0, 4);
  const handleArticlePress = (article) => {
    navigation.navigate('articleDetails', { article });
  };
  return (
    <FlatList
      data={newArticals}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleArticlePress(item)}>
        <View style={styles.article}>
            {item.banner_image? <>
                <Image source={{ uri: item.banner_image }} style={styles.image} />
            </> : <>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1578307985320-34b61a66c195?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80' }} style={styles.image} />
            </>}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.subject}</Text>
            {/* <Text style={styles.date}>{new Date(item.publish_date).toLocaleDateString()}</Text> */}
            <Text style={styles.bodyText} numberOfLines={1}>{item.body_text}</Text>
          </View>
        </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  article: {
    height: 200,
    width: 300,
    marginRight: 16,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
  },
  image: {
    height: '70%',
    width: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 4,
  },
  bodyText: {
    fontSize: 14,
  },
});

export default ArticlesCarousel;
