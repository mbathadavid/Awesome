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
import Header from './components/header';
import Listing from './components/listing';
import Inputs from './components/inputs';
import Sandbox from './components/sandbox';

function App() {
  const [names,setNames] = useState([
    { id: 1, fname: 'David', lname: 'Mudler' },
    { id: 2, fname: 'Kivisi', lname: 'Munyao' },
    { id: 3, fname: 'Alex', lname: 'Chamwanda' },
    { id: 4, fname: 'Charles', lname: 'Nguna' }
  ])

  const submitHandler = (fname,lname) => {
    if (fname.length < 3) {
      Alert.alert('OOPS!', 'The first name must be 3 characters long and above...', [
        {text: 'Understood', onPress: () => console.log('Alert Closed')}
      ])
    } else if(lname.length < 3){
      Alert.alert('OOPS!', 'The last name must be 3 characters long and above...', [
        {text: 'Understood', onPress: () => console.log('Alert Closed')}
      ])
    } else {
      setNames((prevNames) => {
        return [
          { id: Math.random(), fname: fname, lname: lname },
          ...prevNames
        ]
      })
      Keyboard.dismiss()
    }
  }

 
  return (
    //<Sandbox/>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}>
    <View style={styles.container}>
    {/** Header Start */}
    <View style={styles.content}>
    <Header/>
    {/** Header Start */}

    <Inputs submitHandler={submitHandler}/>

    <Listing names={names}/>
    </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  }
});

export default App;
