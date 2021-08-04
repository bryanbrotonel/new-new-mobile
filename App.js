// import "react-native-gesture-handler";
import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import SubmissionPage from './pages/SubmissionPage';
import AboutPage from './pages/AboutPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomePageStack() {
  return (
    <Stack.Navigator initialRouteName="HomePageStack">
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={({ navigation }) => ({
          title: 'New New',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('About')}
              title="About"
              color="#000"
            />
          ),
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsPage}
        options={{ title: 'Details Page', headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="About"
        component={AboutPage}
        options={{ title: 'New New', headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  // Load fonts
  const [loaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={HomePageStack}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Submission"
          component={SubmissionPage}
          options={{ title: 'New New' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
