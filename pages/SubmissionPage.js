import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Modal,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  StatusBar,
  TouchableOpacity,
  Pressable,
  View,
  Text,
} from 'react-native';

import { submitArtist } from '../helpers/dbHelper';

import HeaderText from '../components/HeaderText';
import BodyText from '../components/BodyText';

export default function SubmissionPage() {
  const [subArtist, onChangeSubArtist] = useState(null);
  const [subHandle, onChangeSubHandle] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  function onSubmitSubmission() {
    if (subArtist == null) Alert.alert('Enter Artist Name');
    else if (subHandle == null) Alert.alert('Enter Your Social Media Handle');
    else {
      onChangeSubArtist(null);
      onChangeSubHandle(null);
      setModalVisible(!modalVisible);
      submitArtist(subArtist, subHandle);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <BodyText style={{ ...styles.modalText }}>
              Thank you for sharing music with the world! Check back to see your
              artist on your feed.
            </BodyText>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <HeaderText style={{ ...styles.titleText }}>Plug Artists In</HeaderText>
      <BodyText style={{ ...styles.subTitleText }}>
        Know any new and upcomming artists? Share them with the world!
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 15,
    padding: 17,
    elevation: 2,
    alignSelf: 'flex-end',
  },
  buttonOpen: {
    backgroundColor: '#0D3B66',
  },
  buttonClose: {
    backgroundColor: '#0D3B66',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 30,
    lineHeight: 30,
    textAlign: 'left',
  },
});
