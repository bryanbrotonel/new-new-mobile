import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import BodyText from '../components/BodyText';
import HeaderText from '../components/HeaderText';

const AboutPage = () => {

  return (
    <SafeAreaView style={styles.container}>
      <HeaderText style={{ ...styles.aboutTitle }}>About</HeaderText>
      <BodyText style={{ ...styles.aboutText }}>
        new new is a platform where I shed light on new artists. Curated by
        personal taste, this is a collection of the different sounds that I
        discover from my day to day listening. Sharing music is one of the
        greatest gifts we can ever receive. new new allows me to share new
        refreshing sounds to the world.
      </BodyText>
      <BodyText style={{ ...styles.aboutText }}>
        From one listener to another.
      </BodyText>
      <BodyText style={{ ...styles.aboutText }}>@bryanbrotonel</BodyText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 16,
  },
  aboutTitle: {
    marginVertical: 20,
    textAlign: 'center',
  },
  aboutText: {
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default AboutPage;
