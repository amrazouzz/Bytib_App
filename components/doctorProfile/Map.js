import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const Map = ({ doctor }) => {

    useEffect(() => {
      console.log('drLatitude', doctor.location.latitude)
    }, [])
    
  return (
    <View style={{ flex: 1, borderRadius: 5, overflow: 'hidden' }}>
      <MapView
        style={{ flex: 1, width: '100%' }}
        initialRegion={{
          latitude: doctor.location.latitude,
          longitude: doctor.location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
         <Marker
          coordinate={{
            latitude: doctor.location.latitude,
            longitude: doctor.location.longitude,
          }}
          title={doctor.name}
          pinColor="#129A7F"

        />
        {/* Add any additional map components, such as markers, here */}
      </MapView>
    </View>

  );
};

export default Map;
