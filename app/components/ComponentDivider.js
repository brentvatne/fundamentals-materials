import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

let styles;

const ComponentDivider = ({ children, style }) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
);

styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: '#dddddd',
    borderBottomWidth: 1,
  },
});

export default ComponentDivider;
