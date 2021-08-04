import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HeaderText = (props) => {
  return (
    <Text style={{ ...styles.bodyFont, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  bodyFont: {
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
  },
});

export default HeaderText;
