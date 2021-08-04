import React from 'react';
import {
  StyleSheet,
  Linking,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faItunesNote,
  faInstagram,
  faSoundcloud,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';

import HeaderText from '../components/HeaderText';
import BodyText from '../components/BodyText';

const DetailsPage = ({ route }) => {
  const { artist } = route.params;

  const {
    name,
    image,
    bio,
    notableTitle,
    notableLink,
    instagram,
    spotify,
    soundcloud,
    submitter,
    timeStamp,
  } = artist;

  const instagramView =
    instagram != '' ? (
      <FontAwesomeIcon
        onPress={() => Linking.openURL('https://instagram.com/' + instagram)}
        icon={faInstagram}
        size={30}
        style={styles.socialLogo}
      />
    ) : null;

  const spotifyView =
    spotify != '' ? (
      <FontAwesomeIcon
        onPress={() =>
          Linking.openURL('https://open.spotify.com/artist/' + spotify)
        }
        icon={faSpotify}
        size={30}
        style={styles.socialLogo}
      />
    ) : null;

  const soundcloudView =
    soundcloud != '' ? (
      <FontAwesomeIcon
        onPress={() => Linking.openURL('https://soundcloud.com/' + soundcloud)}
        icon={faSoundcloud}
        size={30}
        style={styles.socialLogo}
      />
    ) : null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.artistView}>
            <View style={{ flex: 2 }}>
              <HeaderText>{name}</HeaderText>
            </View>
            <View style={styles.socialsView}>
              {instagramView}
              {spotifyView}
              {soundcloudView}
            </View>
          </View>
          <BodyText>{bio}</BodyText>
        </View>
        <TouchableOpacity
          style={styles.notableView}
          onPress={() => Linking.openURL(notableLink)}
        >
          <FontAwesomeIcon
            icon={faItunesNote}
            size={25}
            style={styles.notableLogo}
          />
          <BodyText style={styles.notableText}>
            Listen to {notableTitle}
          </BodyText>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  artistView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 30,
  },
  socialsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  socialLogo: {
    flex: 1,
    marginHorizontal: 6,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 300,
  },
  notableView: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 30,
  },
  notableLogo: {
    flex: 1,
    marginRight: 4,
  },
  notableText: {
    flex: 1,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default DetailsPage;
