import React from 'react';
import Inputs from '../components/inputs';
import Login from '../components/login';
import ForgotPass from '../components/forgotpass';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigation from './drawernavigation';
import TabsNavigation from './tabsnavigation';
//import Dashboard from '../components/accountcomponents/dashboard';

const Stack = createNativeStackNavigator();

function SignupinStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown:false }} />
        <Stack.Screen name="SignUp" component={Inputs} options={{ headerShown:false }} />
        <Stack.Screen name="ResetPass" component={ForgotPass} options={{ headerShown:false }} />
        <Stack.Screen name="ToDashBoard" component={DrawerNavigation} options={{ headerShown:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default SignupinStack
