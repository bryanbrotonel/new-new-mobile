import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import HeaderText from '../components/HeaderText';
import BodyText from '../components/BodyText';

export default function SubmissionPage() {
  const [subArtist, onChangeSubArtist] = useState(null);
  const [subHandle, onChangeSubHandle] = useState(null);

  function onSubmitSubmission() {
    if (subArtist == null) Alert.alert('Enter Artist');
    else if (subHandle == null) Alert.alert('Enter Handle');
    else submitArtist(subArtist, subNotable, subHandle);
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderText style={{ ...styles.titleText }}>Plug Artists In</HeaderText>
      <BodyText style={{ ...styles.subTitleText }}>
        Know any artists? Share new artists with the world!
      </BodyText>
      <TextInput
        style={styles.input}
        onChangeText={onChangeSubArtist}
        value={subArtist}
        placeholder="Enter Artist"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeSubHandle}
        value={subHandle}
        placeholder="Your Social Handle"
      />
      <TouchableOpacity style={styles.submitButton}>
        <Button
          title="Submit"
          onPress={onSubmitSubmission}
          color="#fff"
          accessibilityLabel="Submit your Artist!"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  titleText: {
    marginTop: 50,
    marginBottom: 15,
    color: '#0D3B66',
  },
  subTitleText: {
    fontSize: 23,
    marginBottom: 40,
    width: '85%',
  },
  input: {
    height: 45,
    fontSize: 17,
    marginBottom: 30,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#7C7C7C',
  },
  submitButton: {
    width: 115,
    height: 45,
    backgroundColor: '#0D3B66',
    justifyContent: 'center',
    borderRadius: 15,
  },
});
