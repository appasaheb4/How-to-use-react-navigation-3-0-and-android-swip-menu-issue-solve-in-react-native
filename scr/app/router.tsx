import React, { Component } from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import LoginScreen from "../screen/LoginScreen/LoginScreen";
import HomeScreen from "../screen/HomeScreen/HomeScreen";
import SettingScreen from "../screen/SettingsScreen/SettingsScreen";
import DrawerScreen from "../screen/DrawerScreen";

//TODO: StackNavigator:LoginRouter
const LoginRouter = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: "LoginScreen"
  }
);

//TODO: TabNavigator

//TODO: TabNavigator:TabNavigator
const TabNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        drawerLockMode: "locked-open",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={20} color={tintColor} />
        )
      }
    }
  },
  {
    initialRouteName: "HomeScreen",
    tabBarOptions: {
      activeTintColor: "#3F51B5",
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "#ffffff"
      }
    }
  }
);

//TODO: DrawerNavigator
//TODO: DrawerNavigator:LeftDrawerNavigator
const LeftDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => <Icon name="home" size={17} />
      }
    }
  },
  {
    initialRouteName: "Home",
    contentComponent: DrawerScreen,
    drawerPosition: "left",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    contentOptions: {
      activeTintColor: "#3F51B5",
      style: {
        flex: 1,
        paddingTop: 15
      }
    }
  }
);

//TODO: RootNavigator
//TODO: RootNavigator:createRootNavigator
export const createRootNavigator = (
  signedIn = false,
  screenName = "LoginScreen"
) => {
  if (screenName == "LoginScreen") {
    return createStackNavigator(
      {
        LoginRouter: {
          screen: LoginRouter,
          navigationOptions: { header: null }
        },
        TabbarBottom: {
          screen: LeftDrawerNavigator,
          navigationOptions: { header: null }
        }
      },
      {
        initialRouteName: signedIn ? "LoginRouter" : "TabbarBottom"
        // initialRouteName: signedIn ? "OnBoardingNavigator" : "OnBoardingNavigator"
        // initialRouteName: signedIn ? "TabbarBottom" : "TabbarBottom"
      }
    );
  } else {
    return createStackNavigator(
      {
        LoginRouter: {
          screen: LoginRouter,
          navigationOptions: { header: null }
        },
        TabbarBottom: {
          screen: LeftDrawerNavigator,
          navigationOptions: { header: null }
        }
      },
      {
        initialRouteName: signedIn ? "TabbarBottom" : "TabbarBottom"
        //  initialRouteName: signedIn ? "OnBoardingNavigator" : "OnBoardingNavigator"
        //initialRouteName: signedIn ? "TabbarBottom" : "TabbarBottom"
      }
    );
  }
};
