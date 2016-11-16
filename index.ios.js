/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import WelcomeScene from './app/components/WelcomeScene';

export default class rnNavigator extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Welcome Scene', index: 0 }}
        renderScene={(route, navigator) => {
          return <WelcomeScene title={route.title} />
        }}
      />
    );
  }
}
AppRegistry.registerComponent('rnNavigator', () => rnNavigator);
