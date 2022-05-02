import React from 'react';
import { StyleSheet,Text,View,ActivityIndicator,FlatList,TextInput,Button,ImageBackground,TouchableOpacity,Alert,Keyboard,TouchableWithoutFeedback } from 'react-native';
import Header from './header';
import axios from 'axios';
import { Icon } from 'react-native-elements';

function ForgotPass() {
  return (
    <ImageBackground
      source={ require('../images/Maize-Production.png') }
      style={styles.backgoundimg}>
    <View>
    <Header/>
       <Text>This is the Page where you can reset yoir password</Text>
    </View>
    </ImageBackground>
  )
  }
  
  const styles = StyleSheet.create({
    backgoundimg: {
      flex: 1
    },
    formheader: {
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 4,
      backgroundColor: 'white',
      marginBottom: 0,
      color: 'coral',
      borderBottomWidth: 5,
      borderBottomColor: "#009900",
    },
    loglink1: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#cc0066',
      fontSize: 15
    },
    loglink2: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white',
      fontSize: 22,
      backgroundColor: '#ff5c33'
    },
    form: {
        padding: 20,
        marginTop: 0,
        margin: 20
    },
    input: {
        marginBottom: 5,
        paddingHorizontal: 8,
        borderBottomWidth: 2,
        borderBottomColor: "orange",
        backgroundColor: '#b3b3b3',
        color: 'red'
    }
  })

export default ForgotPass
