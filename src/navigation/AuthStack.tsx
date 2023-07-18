import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';
import CreateRecord from '../screens/auth/CreateRecord';
import HomeScreen from '../screens/home/HomeScreen';
import SplashScreen from '../screens/splash/SplashScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"SplashScreen"}
    >
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
      />

      <Stack.Screen
        name="CreateRecord"
        component={CreateRecord}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
