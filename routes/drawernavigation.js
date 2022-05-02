import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../components/accountcomponents/dashboard';
import Settings from '../components/accountcomponents/settings';
import TabsNavigation from './tabsnavigation';

const Drawer = createDrawerNavigator()

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation
