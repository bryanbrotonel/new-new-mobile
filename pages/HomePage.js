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
    const {
      name,
      image,
      notableTitle,
      notableLink,
      instagram,
      soundcloud,
      submitter,
      timeStamp,
    } = artist;

    const item = (
      <View key={instagram}>
        <ArtistPost
          name={name}
          image={image}
          notableTitle={notableTitle}
          notableLink={notableLink}
          instagram={instagram}
          soundcloud={soundcloud}
          submitter={submitter}
          timeStamp={timeStamp}
        />
        <Button
          title="Go to Profile"
          onPress={() =>
            navigation.navigate('Details', {
              artist: artist,
            })
          }
        />
      </View>
    );
    items.push(item);
  });

  return <ScrollView>{items}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
export default HomePage;
