import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { getPosts, getArtists, submitArtist } from "./src/helpers/dbHelper";
import ArtistPost from "./src/components/ArtistPost";

export default function App() {
  const [artists, setArtists] = useState([]);
  const [subArtist, onChangeSubArtist] = useState(null);
  const [subNotable, onChangeSubNotable] = useState(null);
  const [subHandle, onChangeSubHandle] = useState(null);

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
    const item = (
      <ArtistPost
        name={`${artist.name}`}
        image={`${artist.image}`}
        noteableTitle={`${artist.notableTitle}`}
        noteableLink={`${artist.notableLink}`}
        instagram={`${artist.instagram}`}
        soundcloud={`${artist.soundcloud}`}
        submitter={`${artist.submitter}`}
        timeStamp={`${artist.timeStamp}`}
        key={`${artist.instagram}`}
      />
    );
    items.push(item);
  });

  function onSubmitSubmission() {
    if (subArtist == null) Alert.alert("Enter Artist");
    else if (subNotable == null) Alert.alert("Enter Notable");
    else if (subHandle == null) Alert.alert("Enter Handle");
    else submitArtist(subArtist, subNotable, subHandle);
  }

  return (
    <SafeAreaView>
      <ScrollView styles={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeSubArtist}
          value={subArtist}
          placeholder="Enter Artist"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSubNotable}
          value={subNotable}
          placeholder="Enter Notable"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSubHandle}
          value={subHandle}
          placeholder="Enter Handle"
        />
        <Button title="Submit" onPress={onSubmitSubmission} />
        <View>{items}</View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
