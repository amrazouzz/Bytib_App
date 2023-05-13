import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Share } from 'react-native';
import Header from '../components/articles/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icons from 'react-native-heroicons/solid';
import Comment from '../components/articles/Comment';
import CreateComment from '../components/articles/CreateComment';

const ArticleDetails = ({ route }) => {
  const { subject, banner_image, doctor_name, body_text } = route.params.article;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${subject}\n\n${body_text}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#eaf5fa' }}>
        <Header />
        {/* Banner Image */}
        <View>
          {banner_image ? (
            <Image source={{ uri: banner_image }} style={styles.bannerImage} />
          ) : (
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1594819159323-b72124baafaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=953&q=80',
              }}
              style={styles.bannerImage}
            />
          )}
          <Text style={styles.subject}>{subject}</Text>
        </View>
        {/* Doctor Section */}
        <View style={styles.doctorSection}>
          <Image
            className="ml-5"
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
            style={styles.doctorImage}
          />
          <Text style={styles.doctorName}>{doctor_name}</Text>
          <Icons.ShareIcon
            className="mr-5"
            size={24}
            color="#000"
            onPress={onShare}
          />
        </View>
        {/* Article Body */}
        <View style={styles.articleBody}>
          <Text style={styles.bodyText}>{body_text}</Text>
        </View>
        {/* Comment Section */}
        <View style={styles.commentSection}>
          <Text style={styles.sectionTitle}>Comments</Text>
          {/* Add your comment component here */}
            {/* <Comment /> */}
          <CreateComment />
        
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bannerImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  subject: {
    position: 'relative',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
  }, 
  doctorSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    margin:5,
    marginLeft:5,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 'auto',
  },
  articleBody: {
    padding: 16,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
  },
  commentSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default ArticleDetails;
