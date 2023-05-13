import { View, Text } from 'react-native'
import React from 'react'
import { BellIcon } from 'react-native-heroicons/solid'
import { StyleSheet } from 'react-native'

const Notification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <BellIcon size={25} color={'#509ca4'} style={styles.icon} />
      </View>
      <Text style={styles.text}>Notification</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  icon: {
    fontSize: 25,
  },
  text: {
    marginLeft: 10,
  },
});

export default Notification