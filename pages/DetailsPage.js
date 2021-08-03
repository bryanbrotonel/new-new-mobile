import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Button,
  Text,
  Alert,
} from "react-native";
import { getPosts, getArtists, submitArtist } from "../helpers/dbHelper";
import ArtistPost from "../components/ArtistPost";

const DetailsPage = ({ navigation }) => {
  return (
    <View>
      <Text>Details Page</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailsPage