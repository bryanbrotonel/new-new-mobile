import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import { getPosts, getArtists } from "./src/helpers/dbHelper";
import ArtistPost from "./src/components/ArtistPost";

export default function App() {
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

  return (
    <SafeAreaView>
      <ScrollView styles={styles.container}>
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
});
