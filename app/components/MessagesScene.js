// @flow

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MessagesScene extends Component {
  propTypes() {
    title: React.PropTypes.string
  }

  defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi! This is the Messages Screen.</Text>
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
