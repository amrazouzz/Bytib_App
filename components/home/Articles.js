import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import { API_URL } from '../../api/api';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const ArticlesList = () => {
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
  }, []);

  const handleArticlePress = () => {
    navigation.navigate('articles');
  };

  const newArticals  = articles.slice(0, 2);
  return (
    <>
<FlatList
  data={newArticals}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <TouchableOpacity onPress={() => handleArticlePress()} >
    <View style={{ flexDirection: 'row', padding: 16, }}>
      <View style={{ marginRight: 16 }}>
        {item.banner_image ? (
          <Image source={{ uri: item.banner_image }} style={{ width: 70, height: 70, borderRadius: 10 }} />
        ) : (
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            }}
            style={{ width: 70, height: 70, borderRadius: 10 }}
          />
        )}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8, }}>{item.subject}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
          <Text style={{ fontSize: 16, color: 'gray' }}>{item.doctor_name}</Text>
          <Text style={{ fontSize: 16, color: 'gray' }}>{new Date(item.publish_date).toLocaleDateString()}</Text>
        </View>
        <Text style={{ marginTop: 8 }}>{item.body_text.slice(0, 100)}...</Text>
      </View>
    </View>
    </TouchableOpacity>
  )}
/>


    </>
    
  );
};


export default ArticlesList;
