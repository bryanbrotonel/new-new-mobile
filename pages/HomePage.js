import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Button,
  Alert,
} from "react-native";
import { getPosts, getArtists, submitArtist } from "../helpers/dbHelper";
import ArtistPost from "../components/ArtistPost";

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
    const item = (
      <View key={`${artist.instagram}`}>
        <ArtistPost
          name={`${artist.name}`}
          image={`${artist.image}`}
          noteableTitle={`${artist.notableTitle}`}
          noteableLink={`${artist.notableLink}`}
          instagram={`${artist.instagram}`}
          soundcloud={`${artist.soundcloud}`}
          submitter={`${artist.submitter}`}
          timeStamp={`${artist.timeStamp}`}
        />
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    );
    items.push(item);
  });

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    //   <ScrollView style={styles.container}>
    //     <View>{items}</View>
    //   </ScrollView>
    // </SafeAreaView>
    <ScrollView>{items}</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
export default HomePage;
