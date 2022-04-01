import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import { UpdateLogin, SetInstantLocation } from "./redux/actions";
import * as Location from "expo-location";

import Register from "./component/unSigned/register";
import Home from "./component/isSigned/home";
import FindFriend from "./component/isSigned/findFriend";
import SelectLocation from "./component/isSigned/selectLocation";

const Stack = createStackNavigator();

// Sayfa yönlendirme, yönetme
class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      let getlocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = getlocation.coords;
      const location = { latitude, longitude };
      this.props.SetInstantLocation(location);
    } catch (error) {
      console.log(error);
    }
  }

  StartScreen() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#bc6c25",
        }}
      >
        <ActivityIndicator size="large" color="#fff" />
        <Text
          style={{
            textAlign: "center",
            justifyContent: "center",
            marginTop: 7,
            color: "white",
          }}
        >
          Yükleniyor..
        </Text>
      </View>
    );
  }

  render() {
    if (this.props.login == undefined) {
      return <this.StartScreen />;
    }
    {
      return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#bc6c25" },
              headerTintColor: "#fff",
              title: "",
              headerTitleStyle: {
                fontFamily: "ShadowsIntoLight",
                fontSize: 25,
              },
            }}
          >
            {this.props.login == true ? (
              <>
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{ headerShown: true, title: "GOFRIEND" }}
                />
                <Stack.Screen
                  name="FindFriend"
                  component={FindFriend}
                  options={{
                    headerShown: true,
                    title: "GOFRIEND",
                    headerBackTitle: "Geri",
                  }}
                />
                <Stack.Screen
                  name="SelectLocation"
                  component={SelectLocation}
                  options={{
                    headerShown: true,
                    title: "GOFRIEND",
                    headerBackTitle: "Geri",
                  }}
                />
              </>
            ) : (
              <Stack.Screen
                name="Register"
                component={Register}
                options={{
                  title: "GOFRIEND",
                  headerBackTitle: null,
                  headerShown: true,
                }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}
function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

export default connect(mapStateToProps, { UpdateLogin, SetInstantLocation })(
  Router
);
