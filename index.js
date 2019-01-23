/** @format */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import { createRootNavigator } from "./scr/app/router";
import { createAppContainer } from "react-navigation";
const Layout = createRootNavigator(true, "LoginScreen");
const AppContainer = createAppContainer(Layout);
console.disableYellowBox = true;
  
AppRegistry.registerComponent(appName, () => AppContainer);
