import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './src/redux/reducer/user';
import Auth from './src/constants/Auth';
import NavigationService from './src/navigation/NavigationService';
import { Colors } from './src/styles';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';

const Stack = createStackNavigator();

export default function App() {
  const dispatch = useDispatch();

  const { login } = useSelector(state => state.User);

  const [loginChk, setLoginChk] = useState(true);

  useEffect(() => { getUser() }, []);

  const getUser = async () => {
    let data = await Auth.getAccount();
    if (data !== null) {
      Auth.setLocalStorageData('account', data)
      dispatch(setUser(data));
      setLoginChk(false);
    } else {
      console.log('Need to login');
      setLoginChk(false);
    }
  };

  if (loginChk) return null;

  return (
    <NavigationContainer ref={r => NavigationService.setTopLevelNavigator(r)}>
      <Stack.Navigator
        detachInactiveScreens={false}
        initialRouteName="Auth"
        screenOptions={{
          cardStyle: { backgroundColor: Colors.white },
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="Auth" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
