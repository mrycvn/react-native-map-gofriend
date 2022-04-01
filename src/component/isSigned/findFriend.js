import { View, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { connect } from "react-redux";

// Arkadaş Bulma Sayfası
const FindFriend = (props) => {
  const [coordinates] = useState([
    {
      latitude: props.mylatitude,
      longitude: props.mylongitude,
    },
    {
      latitude: parseFloat(props.route.params.x),
      longitude: parseFloat(props.route.params.y),
    },
  ]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}
      >
        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={"add your own key"}
          strokeWidth={6}
          strokeColor="#D00"
          mode={"DRIVING"}
          timePrecision="now"
        />
        <MapView.Marker coordinate={coordinates[0]} />
        <MapView.Marker coordinate={coordinates[1]} />
      </MapView>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    login: state.login,
    mylatitude: state.myLocation.latitude,
    mylongitude: state.myLocation.longitude,
  };
}

export default connect(mapStateToProps, {})(FindFriend);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maps: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
