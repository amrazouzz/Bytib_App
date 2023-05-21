import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as Icons from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <View style={styles.backButton}>
        <Pressable
          android_ripple={{
            borderless: true,
            radius: 20,
            color: "#acccd4",
          }}
          onPress={() => navigation.goBack()}
        >
          <Icons.ArrowLeftIcon
            color="#ffffff"
            className="h-7 w-7 text-gray-500"
          />
        </Pressable>
      </View>
      {/* Title */}
      <Text className='font-extrabold' style={styles.title}>Doctor Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    elevation: 4,
    height: 56,
    paddingHorizontal: 16,
  },
  backButton: {
    backgroundColor: "#509ca4",
    borderRadius: 16,
    padding: 8,
    marginRight: 16,
    position: 'absolute',
    left: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
