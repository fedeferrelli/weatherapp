import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker, Callout } from 'react-native-maps';

export default function Mapping() {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={{
        latitude: -38.5545,
        longitude: -58.73961,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
       >    
       
       <Marker
       coordinate={{
           latitude: 37.78825,
            longitude: -122.4324}}
           
        > 
        
        <Callout><Text>rogelio</Text></Callout>
        
        
        </Marker>
       
       
       
       </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
