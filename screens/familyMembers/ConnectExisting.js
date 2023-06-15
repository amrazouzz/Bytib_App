import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../components/common/CommonHeader";
import { Camera, CameraType } from "expo-camera";
import { Picker } from "@react-native-picker/picker";

const ConnectExisting = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [relation, setRelation] = useState("");
  const [scannedData, setScannedData] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    console.log(`Scanned ${type} barcode with data: ${data}`);
    setScannedData(data);
  };

  return (
    <View style={styles.screen}>
      <SafeAreaView>
        <View>
          <CommonHeader headerTilte={t("connectExisting")} />
        </View>
      </SafeAreaView>
      <View style={styles.container}>
        <View
          style={{
            width: "70%",
            overflow: "hidden",
            borderRadius: 15,
            height: 50,
            marginBottom: 40,
            marginTop: 40,
          }}
        >
          <Picker
            style={styles.input}
            selectedValue={relation}
            onValueChange={(itemValue) => setRelation(itemValue)}
          >
            <Picker.Item label={t("relationship")} value="" />

            <Picker.Item label="relation" value="relation" />
          </Picker>
        </View>
        <Text style={styles.label}>{t("scanProfile")}</Text>

        <View style={styles.caneraContainer}>
          <Camera
            style={styles.camera}
            type={CameraType.back}
            onBarCodeScanned={handleBarCodeScanned}
            barCodeScannerSettings={{
              barCodeTypes: [Camera.Constants.BarCodeType],
            }}
          ></Camera>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setScannedData(null);
          }}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        {scannedData && (
          <Text
            style={styles.scannedData}
          >{`Scanned Data: ${scannedData}`}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#eaf5fa",
    flex: 1,
  },
  container: {
    alignItems: "center",
    flex: 1,
  },
  caneraContainer: {
    width: 250,
    height: 250,
    overflow: "hidden",
    borderRadius: 20,
    marginVertical: 20,
  },
  scannedData: {
    fontSize: 16,
    marginTop: 20,
  },
  camera: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  label: {
    fontSize: 22,
    marginBottom: 5,
    alignSelf: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#FF14a2",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  scannedData: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ConnectExisting;
