import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

const AboutPage = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.motive}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        eligendi laudantium, itaque iusto rem dolore incidunt iste. Placeat
        neque ullam nobis necessitatibus cumque, saepe labore alias voluptate
        blanditiis adipisci at?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  motive: {
    textAlign: "center",
  },
});

export default AboutPage;
