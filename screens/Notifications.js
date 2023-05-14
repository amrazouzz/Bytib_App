import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/notifications/Header";
import Notification from "../components/notifications/Notification";
import {
  CheckCircleIcon,
  DevicePhoneMobileIcon,
  EyeIcon,
  PhoneArrowDownLeftIcon,
  PhoneXMarkIcon,
} from "react-native-heroicons/outline";

const NotificationsScreen = () => {
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

      {/* notifications list */}
      <ScrollView style={{ flex: 1 }}>
        <View className="py-2">
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginRight: 20,
              marginLeft: 20,
            }}
          >
            <Text className="font-bold text-lg px-2 py-2">New</Text>
          </View>
          <View className="px-8 py-5">
            <Notification />
          </View>
        </View>

        <View className="py-2">
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginRight: 20,
              marginLeft: 20,
            }}
          >
            <Text className="font-bold text-lg px-2 py-2">Earlier</Text>
          </View>
          <View className="px-8 py-5">
            <Notification />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.content}>
            {/* <CheckCircleIcon size={150} color={"#509ca4"} /> */}

            <Image source={require('../assets/images/home/notifications.png')} />
            <Text style={styles.text}>No Notifications Yet!</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  text: {
    color: "#509ca4",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default NotificationsScreen;
