import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

export default class ArtistPost extends React.Component {
  render() {
    const {
      name,
      image,
      noteableTitle,
      noteableLink,
      instagram,
      soundcloud,
      submitter,
      timeStamp,
    } = this.props;
    return (
      <View>
        <Image style={styles.tinyLogo} source={{ uri: image }} />
        <Text>{name}</Text>
        <Text>{noteableTitle}</Text>
        <Text>{instagram}</Text>
        <Text>{soundcloud}</Text>
        <Text>{submitter}</Text>
        <Text>{image}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
