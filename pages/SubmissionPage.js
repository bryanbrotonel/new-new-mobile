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

export default function SubmissionPage() {
  const [subArtist, onChangeSubArtist] = useState(null);
  const [subNotable, onChangeSubNotable] = useState(null);
  const [subHandle, onChangeSubHandle] = useState(null);

  function onSubmitSubmission() {
    if (subArtist == null) Alert.alert("Enter Artist");
    else if (subNotable == null) Alert.alert("Enter Notable");
    else if (subHandle == null) Alert.alert("Enter Handle");
    else submitArtist(subArtist, subNotable, subHandle);
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
