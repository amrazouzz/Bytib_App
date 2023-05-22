import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { API_URL } from "../api/api";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/categories/CategoryHeader";
import { FlatList } from "react-native";
import { Image } from "react-native";
import { ClockIcon, CogIcon, StarIcon } from "react-native-heroicons/outline";
import { MapIcon, MapPinIcon } from "react-native-heroicons/solid";

const CategoryDoctorsScreen = ({ route }) => {
  const [doctors, setDoctors] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchDoctors(route.params.categoryId);
  }, [route.params.categoryId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const fetchDoctors = (categoryId) => {
    fetch(`${API_URL}/doctors`)
      .then((response) => response.json())
      .then((data) => {
        // Filter the doctors based on the category id
        const filteredDoctors = data.results.filter(
          (doctor) => doctor.categories.some((cat) => cat[0] === categoryId)
        );
        setDoctors(filteredDoctors);
      });
  };
  const handleDoctorPress = (doctorId) => {
    navigation.navigate('doctorProfile', { doctorId });

  };

  const renderDoctorCard = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={() => handleDoctorPress(item.id)}>
     
    <View style={styles.doctorCard}>
      <View style={styles.cardContent}>
        {item.photo? <>
            <Image
          style={styles.doctorPhoto}
          source={{ uri: item.photo }}
          resizeMode="cover"
        />
        </> : <>
            <Image
          style={styles.doctorPhoto}
          source={{ uri: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' }}
          resizeMode="cover"
        />
        </>}
        <View style={{marginRight:20}}>
        <Text style={styles.doctorName}>د. {item.name}</Text>
        <Text style={styles.doctorCategory}>{item.categories[0][1]}</Text>
        </View>
        <View style={styles.textContainer}>
  <View style={styles.iconTextContainer}>
    <ClockIcon  size={20} color={"green"} />
    <Text style={styles.iconText}>Open Now</Text>
  </View>
  <View style={styles.iconTextContainer}>
    <StarIcon size={20} color={"yellow"} />
    <Text style={styles.iconText}>
      {item.rating} | <MapPinIcon size={20} color={"yellow"} /> {item.distance}
    </Text>
  </View>
</View>
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eaf5fa" }}>
      {/* Header */}
      <Header />

      {/* Body */}
      <View style={styles.container}>
        <FlatList
          data={doctors}
          renderItem={renderDoctorCard}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.doctorList}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  doctorList: {
    padding: 16,
  },
  doctorCard: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 4,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  doctorName: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,


  },
  doctorCategory: {
    color: "gray",
    marginLeft: 8,
  },
  doctorPhoto: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    paddingLeft:15
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
    marginTop:5
  },
  iconText: {
    marginLeft: 4,
    textAlign: "center",
  },
});

export default CategoryDoctorsScreen;
