import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./src/redux/reducers";
import Router from "./src/router";
import { useFonts } from "expo-font";

const store = createStore(reducer);

export default function App() {
  const [loaded] = useFonts({
    ShadowsIntoLight: require("./assets/fonts/ShadowsIntoLight.ttf"),
    Bold: require("./assets/fonts/Bold.ttf"),
    Light: require("./assets/fonts/Light.ttf"),
    Medium: require("./assets/fonts/Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Router />
      <StatusBar style="auto" />
    </Provider>
  );
}
