import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import HeaderText from '../components/HeaderText';
import BodyText from '../components/BodyText';

const ArtistPost = (props) => {
  const { artist } = props;
  const { name, image, noteableTitle, instagram, soundcloud, submitter } =
    artist;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <HeaderText style={styles.artistText}>{name}</HeaderText>
      <BodyText style={styles.submitterText}>Submitted by {submitter}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 12,
    paddingBottom: 30,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 400,
  },
  artistText: {
    marginTop: 16,
  },
  submitterText: {
    marginTop: 16,
    color: 'grey',
  },
});

export default ArtistPost;
