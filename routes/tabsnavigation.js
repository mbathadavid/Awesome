import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Market from '../components/bottomtabs.js/market';
import WeatherInfo from '../components/bottomtabs.js/weatherinfo';
import Inbox from '../components/accountcomponents/inbox';

const Tab = createBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Market" component={Market} options={{ headerShown:false }} />
      <Tab.Screen name="Inbox" component={Inbox} options={{ headerShown:false }} />
      <Tab.Screen name="WeatherInfo" component={WeatherInfo} options={{ headerShown:false }} />
    </Tab.Navigator>
  )
}

export default TabsNavigation
