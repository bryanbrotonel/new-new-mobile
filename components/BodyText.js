import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = (props) => {
  return (
    <Text style={{ ...styles.bodyFont, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  bodyFont: {
    fontSize: 17,
    fontFamily: 'Roboto',
  },
});

export default BodyText;
