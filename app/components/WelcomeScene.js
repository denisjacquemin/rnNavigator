// @flow

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class WelcomeScene extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi! My name is {this.props.title}.</Text>
      </View>
    )
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
