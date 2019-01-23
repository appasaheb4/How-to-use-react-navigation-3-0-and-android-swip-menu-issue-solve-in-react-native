/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

import { StackActions, NavigationActions} from "react-navigation";

export default class LoginScreen extends Component<any,any> {

    //TODO: func
    click_Login(){
        const resetAction = StackActions.reset({
            index: 0, // <-- currect active route from actions array
            key: null,
            actions: [NavigationActions.navigate({ routeName: "TabbarBottom" })]
          });
          this.props.navigation.dispatch(resetAction);
    }

  render() {
    return (
      <View style={styles.container}>
            <Button onPress={() => this.click_Login()} title="Login"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});
