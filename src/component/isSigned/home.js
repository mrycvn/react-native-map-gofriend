import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const user = require("../../../assets/img/user.png");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      onPress={() =>
        this.props.navigation.navigate("FindFriend", {
          x: item.latitude,
          y: item.longitude,
        })
      }
    >
      <View
        style={{
          width: "90%",
          backgroundColor: "#ddd",
          padding: 5,
          marginVertical: 6,
          marginLeft: "5%",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          height: 37,
          maxHeight: 75,
          marginBottom: 12,
          borderRadius: 4,
        }}
      >
        <View style={{ width: "49%"}}>
          <Text style={styles.title}>
            {item.id} - {item.name} {item.surname}
          </Text>
        </View>
        <View style={{ width: "49%" }}>
          <Text style={styles.adress}>{item.adress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <SafeAreaView style={{ flex: 1, width: width, height: height }}>
        <View
          style={{
            height: height * 0.2,
            width: width,
            backgroundColor: "#ddd",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: "100%",
              width: "25%",
              marginHorizontal: "5%",
              justifyContent: "center",
            }}
          >
            <Image source={user} style={{ height: 100, width: 100 }} />
          </View>

          <View
            style={{
              height: "100%",
              width: "70%",
              backgroundColor: "#ddd",
              paddingLeft: "3%",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text style={{ fontFamily: "Bold", fontSize: 26, marginBottom: 8 }}>
              {this.props.card.name} {this.props.card.surname}
            </Text>
            <Text
              style={{ fontFamily: "Medium", color: "#bc6c25", fontSize: 14 }}
            >
              {this.props.card.adress}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: height * 0.05,
            backgroundColor: "#ddd",
            flexDirection: "row",
            paddingLeft: 5,
            alignItems: "center",
          }}
          onPress={() => this.props.navigation.navigate("SelectLocation")}
        >
          <MaterialIcons name="add-location" size={24} color="#bc6c25" />
          <Text style={{ marginLeft: 5 }}>Konumumu Güncelle</Text>
        </TouchableOpacity>
        <View
          style={{
            height: height * 0.07,
            backgroundColor: "#bc6c2560",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "ShadowsIntoLight", fontSize: 20 }}>
            Arkadaşım Nerede?
          </Text>
        </View>
        <View style={{ height: height * 0.7, width: width, marginTop: 10 }}>
          <FlatList
            data={this.props.list}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  item: {
    width: "90%",
    backgroundColor: "#ddd",
    padding: 4,
    marginVertical: 6,
    marginLeft: "5%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
    fontFamily:'Medium'
  },
  adress: {
    textAlign: "right",
    paddingRight: 10,
    fontWeight: "bold",
    color: "#041421",
    fontSize: 15,
    padding: 2,
    fontFamily:'Bold'
  },
  title: {
    fontSize: 15,
    padding: 2,
    fontWeight: "500",
  },
});

function mapStateToProps(state) {
  return {
    list: state.userList,
    card: state.profileCard,
  };
}
export default connect(mapStateToProps)(Home);
