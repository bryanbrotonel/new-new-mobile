// import "react-native-gesture-handler";
import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import SubmissionPage from './pages/SubmissionPage';
import AboutPage from './pages/AboutPage';
import {
  faFire,
  faInfoCircle,
  faPlug,
} from '@fortawesome/free-solid-svg-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomePageStack() {
  return (
    <Stack.Navigator initialRouteName="HomePageStack">
      <Stack.Screen
        name="HomeScreen"
        component={HomePage}
        options={({ navigation }) => ({
          title: 'New New',
          headerTitleStyle: {
            ...styles.headerText,
          },
          headerRight: () => (
            <FontAwesomeIcon
              onPress={() => navigation.navigate('About')}
              icon={faInfoCircle}
              size={20}
              style={styles.aboutLogo}
            />
          ),
        })}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsPage}
        options={{
          title: 'New New',
          headerBackTitleVisible: false,
          headerTitleStyle: {
            ...styles.headerText,
          },
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutPage}
        options={{
          title: 'New New',
          headerBackTitleVisible: false,
          headerTitleStyle: {
            ...styles.headerText,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  // Load fonts
  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({color}) => {
            return (
              <FontAwesomeIcon
                icon={route.name === 'Home' ? faFire : faPlug}
                size={25}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: '#0D3B66',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomePageStack}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Submissions"
          component={SubmissionPage}
          options={{
            headerTitleStyle: {
              ...styles.headerText,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  aboutLogo: {
    marginRight: 12,
    color: '#0D3B66',
  },
  headerText: {
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    color: '#0D3B66',
  },
});
