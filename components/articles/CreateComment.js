import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Icons from 'react-native-heroicons/outline';

const CreateComment = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (text) => {
    setComment(text);
  };

  const handleSubmit = () => {
    // TODO: Handle submission of new comment
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Leave a comment"
          value={comment}
          onChangeText={handleCommentChange}

        />
        <View style={styles.arrowIcon}>
          <Icons.ArrowRightIcon size={24} color="#fff" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  inputContainer: {
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
  padding:10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    textAlignVertical: 'center',
    borderRadius: 16,
  },
  arrowIcon: {
    backgroundColor: '#509ca4',
    borderRadius: 16,
    marginLeft: 8,
    padding: 8,
  },
  button: {
    backgroundColor: '#0084ff',
    paddingVertical: 0,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateComment;
