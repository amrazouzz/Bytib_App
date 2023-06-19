import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const Map = () => {

    
  return (
    <View style={{ flex: 1, borderRadius: 5, overflow: 'hidden' }}>
      <MapView
        style={{ flex: 1, width: '100%' }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
         <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title='Searvhed Dr'
          pinColor="#129A7F"

        />
        {/* Add any additional map components, such as markers, here */}
      </MapView>
    </View>

  );
};

export default Map;
