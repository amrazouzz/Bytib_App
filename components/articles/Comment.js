import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Comment = ({ authorName, authorImage, text }) => {
  return (
    <View style={styles.commentContainer}>
      <Image source={{ uri: authorImage }} style={styles.authorImage} />
      <View style={styles.commentTextContainer}>
        <Text style={styles.authorName}>{authorName}</Text>
        <Text style={styles.commentText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 16,
  },
  authorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  commentTextContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
  authorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Comment;
