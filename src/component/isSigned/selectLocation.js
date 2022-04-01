import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { connect } from "react-redux";
import { SetInstantLocation } from "../../redux/actions";

// Konum değiştirme sayfası
class SelectLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinate: this.props.mylocation,
    };
  }

  onMapPress = (e) => {
    // Marker güncellemesi için kullanıldı.
    this.setState({ coordinate: e.nativeEvent.coordinate });
    // Redux güncellemisi için kullanıldı.
    this.props.SetInstantLocation(e.nativeEvent.coordinate);
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          onPress={(e) => this.onMapPress(e)}
          style={styles.maps}
          initialRegion={{
            latitude: this.state.coordinate.latitude,
            longitude: this.state.coordinate.longitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0121,
          }}
        >
          <MapView.Marker coordinate={this.state.coordinate} />
        </MapView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    mylocation: state.myLocation,
  };
}

export default connect(mapStateToProps, { SetInstantLocation })(SelectLocation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maps: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
