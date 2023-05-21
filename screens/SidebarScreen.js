import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { useNavigation } from "@react-navigation/native";
import SidebarHeader from "../components/sidebar/SidebarHeader";
import { ScrollView } from "react-native";
import NavBar from "../components/home/NavBar";
import { StyleSheet } from "react-native";

const SidebarScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
<View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <SidebarHeader />
        <Sidebar />
      </ScrollView>
      <NavBar />
    </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 70, // Adjust this value based on the height of your NavBar
  },
  // Rest of the styles for SidebarHeader, Sidebar, and NavBar
});

export default SidebarScreen;
