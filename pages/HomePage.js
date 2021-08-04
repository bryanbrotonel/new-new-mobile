import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Button,
  Alert,
} from 'react-native';
import { getPosts, getArtists, submitArtist } from '../helpers/dbHelper';
import ArtistPost from '../components/ArtistPost';

const HomePage = ({ navigation }) => {
  const [artists, setArtists] = useState([]);
  var items = [];

  useEffect(() => {
    getPosts()
      .then(function (posts) {
        return getArtists(posts);
      })
      .then(function (artistPosts) {
        setArtists(artistPosts);
      });
  }, []);

  artists.forEach((artist) => {
    const { instagram } = artist;

    const item = (
      <View key={instagram}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DetailsScreen', {
              artist: artist,
            })
          }
          activeOpacity={1}
        >
          <ArtistPost artist={artist} />
        </TouchableOpacity>
      </View>
    );
    items.push(item);
  });

  return <ScrollView>{items}</ScrollView>;
};

export default HomePage;
