import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='SplashScreen'
        >
            <Stack.Screen
                name="Root"
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
}

export default AppStack;

