import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
const MapScreen = () => {
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 12.9634,
        longitude: 77.5855,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
    <Marker
      coordinate={{
        latitude: 12.9634,
        longitude: 77.5855,
      }}
      title="Origin"
      description="Origin description"
    />
    </MapView>
  )
}

export default MapScreen;

const styles = StyleSheet.create({})