/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  Text,
  TouchableHighlight,
  StyleSheet,
  View
} from 'react-native';

import WelcomeScene from './app/components/WelcomeScene';

export default class rnNavigator extends Component {
  render() {
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];
    return (
      <Navigator
        navigationBar={
           <Navigator.NavigationBar
             routeMapper={{
               LeftButton: (route, navigator, index, navState) => {
                 return (
                   <TouchableHighlight onPress={() => {
                       if (route.index === 0) {
                         navigator.push(routes[1]);
                       }
                     }}>
                     <Text>Second</Text>
                   </TouchableHighlight>
                 )
               },
               RightButton: (route, navigator, index, navState) =>
                 { return (<Text>Done</Text>); },
               Title: (route, navigator, index, navState) => {
                 return (
                   <TouchableHighlight onPress={() => {
                       if (route.index === 1) {
                         navigator.pop();
                       }
                     }}>
                     <Text>First</Text>
                   </TouchableHighlight>
                 )
               },
             }}
             style={{backgroundColor: 'gray'}}
           />
        }
        initialRoute={routes[0]}
        renderScene={(route, navigator) =>
          <View style={styles.container}>
            <TouchableHighlight onPress={() => {
              if (route.index === 0) {
                navigator.push(routes[1]);
              } else {
                navigator.pop();
              }
            }}>
              <Text>Hello {route.title}!</Text>
            </TouchableHighlight>
          </View>
        }
      />
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

AppRegistry.registerComponent('rnNavigator', () => rnNavigator);
