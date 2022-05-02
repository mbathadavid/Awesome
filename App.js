import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  FlatList,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import axios from 'axios';
import Header from './components/header';
import Listing from './components/listing';
import Inputs from './components/inputs';
import Sandbox from './components/sandbox';
import SignupinStack from './routes/signupinStack';
import TabsNavigation from './routes/tabsnavigation';
import UserProvider from './userContext';


function App() { 
  return (
    <UserProvider>
      {/* <TabsNavigation/> */}
      <SignupinStack/>
    </UserProvider>
  );
};

export default App;
