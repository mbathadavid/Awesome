import React, { useState } from 'react';
import { StyleSheet,ScrollView,Text,View,ActivityIndicator,FlatList,TextInput,Button,ImageBackground,TouchableOpacity,Alert,Keyboard,TouchableWithoutFeedback } from 'react-native';
import Header from './header';
import axios from 'axios';
import { Icon } from 'react-native-elements';

function Inputs({ navigation }) {
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const [confirmpass,setConfirmPass] = useState('');
  const [resvisibility,setResVisibility] = useState(0);
  const [regresponse,setRegResponse] = useState('');
  const [indicatorval,setIndicatorVal] = useState(0);
  const [emailregistered,setEmailRegistered] = useState("");
  const [phoneregistered,setPhoneRegistered] = useState("");

  //Handle registration
  const submitHandler = () => {
    if (fname.length < 3) {
      Alert.alert('OOPS!', 'The first name must be 3 characters long and above...', [
        {text: 'Understood', onPress: () => console.log('Alert Closed')}
      ])
    } else if(lname.length < 3){
      Alert.alert('OOPS!', 'The last name must be 3 characters long and above...', [
        {text: 'Understood', onPress: () => console.log('Alert Closed')}
      ]) 
      } else if(phone.length < 3) {
        Alert.alert('OOPS!', 'The Phone field must be 3 characters long and above...', [
          {text: 'Understood', onPress: () => console.log('Alert Closed')}
        ]) 
      } else if(email.length < 3) {
        Alert.alert('OOPS!', 'The Email must be 3 characters long and above...', [
          {text: 'Understood', onPress: () => console.log('Alert Closed')}
        ]) 
      } else if(pass.length < 3) {
        Alert.alert('OOPS!', 'The Password must be 3 characters long and above...', [
          {text: 'Understood', onPress: () => console.log('Alert Closed')}
        ])
      } else if(pass !== confirmpass){
        Alert.alert('OOPS!', 'The Passwords did not match. Please make the sure the passwords match', [
          {text: 'Understood', onPress: () => console.log('Alert Closed')}
        ])
      }
      else {
      setEmailRegistered("")
      setPhoneRegistered("")
      setIndicatorVal(1)
      axios({
        method: 'POST',
          url: 'https://munyaoapi.herokuapp.com/api/registeruser',
          headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
          },
        data: JSON.stringify({
          'firstname' : fname,
          'lastname' : lname,
          'email' : email,
          'phone' : phone,
          'password' : pass
        })
      })
      .then((response) => {
        if (response.data.status == 200) {
          setResVisibility(1)
          setIndicatorVal(0)
          setRegResponse(response.data.messages)
          setFname('');
          setLname('');
          setPass('');
          setEmail('');
          setPhone('');
          setConfirmPass('');
          //console.log(response.data)
        } else if(response.data.status == 400) {
          console.log(response.data)
          if(response.data.messages.email) {
            setEmailRegistered(response.data.messages.email);
          }

          if(response.data.messages.phone) {
            setPhoneRegistered(response.data.messages.phone);
          }
          //setDetailRegistered(response.data.messages)
          setIndicatorVal(0)
        }
      })
      .catch((error) => {
        setResVisibility(1)
        setRegResponse('Sorry! Something went wrong. It Could be due to poor internet Connection. Make sure your device is connected to internet')
        setIndicatorVal(0)
        console.log(error)
      })
      Keyboard.dismiss()
    }
  }

  return (
    <ImageBackground
      source={ require('../images/Maize-Production.png') }
      style={styles.backgoundimg}
    >
    <ScrollView>
    <Header/>
    <View style={indicatorval > 0 ? styles.indicatordiv : styles.indicatordiv1}>
      <ActivityIndicator color="#0d0d0d" style={styles.indicator} size="large"/>
      <Text style={styles.indicatortxt}>Registering. Please Wait...</Text>
    </View>

    <View style={resvisibility > 0 ? styles.responsediv : styles.responsediv1}>
    <Text style={styles.restext}>{regresponse}</Text>
    <TouchableOpacity onPress={() => setResVisibility(0)}><Text style={styles.closeres}>X</Text></TouchableOpacity>
    </View>

    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}>
    <View style={styles.form}>
      <Text style={styles.formheader}>Enter your details to join the largest agricultural Forum</Text>
     <TextInput
     value={fname}
     style={styles.input}
     keyboardType="default"
     onChangeText={(val) => setFname(val)}
     placeholder='Enter First Name'
     />

    <TextInput
    value={lname}
     style={styles.input}
     keyboardType="default"
     onChangeText={(val) => setLname(val)}
     placeholder='Enter Second Name'
     />
    <TextInput
     value={phone}
     style={styles.input}
     keyboardType="phone-pad"
     onChangeText={(val) => setPhone(val)}
     placeholder='Enter Phone'
     />
     <Text style={phoneregistered == "" ? styles.phonereg1 : styles.phonereg}>{phoneregistered}</Text>

    <TextInput
     value={email}
     style={styles.input}
     keyboardType="email-address"
     onChangeText={(val) => setEmail(val)}
     placeholder='Enter Email'
     />
     <Text style={emailregistered == "" ? styles.emailreg1 : styles.emailreg}>{emailregistered}</Text>

    <TextInput
     value={pass}
     style={styles.input}
     onChangeText={(val) => setPass(val)}
     placeholder='Enter your password'
     />

    <TextInput
     value={confirmpass}
     style={styles.input}
     onChangeText={(val) => setConfirmPass(val)}
     placeholder='Confirm your password'
     />

     <Button onPress={() => submitHandler()} title='JOIN FARMCONNECT'/>

      <View>
     <Text style={styles.loglink1}>Already have an Account?</Text>
     <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.loglink2}>LOG IN</Text></TouchableOpacity>
     </View>

    </View>
    </TouchableWithoutFeedback>
    </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    backgoundimg: {
      flex: 1
    },
    emailreg: {
      color: 'red',
      backgroundColor: 'yellow',
      marginBottom: 2
    },
    phonereg: {
      color: 'red',
      backgroundColor: 'yellow',
      marginBottom: 2
    },
    emailreg1: {
      display: 'none'
    },
    phonereg1: {
      display: 'none'
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
    responsediv: {
      position: 'absolute',
      zIndex: 1,
      top: '8%',
      backgroundColor: '#ff4d94',
      padding: 5,
    },
    responsediv1: {
      display: 'none'
    },
    restext: {
      textAlign: 'center',
      fontSize: 15,
      color: 'black'
    },
    closeres: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#ff0000'
    },
    indicatordiv: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '70%',
      left: '5%',
      right: '5%',
      width: '90%',
      padding: 5,
      backgroundColor: "#ff0055",
      zIndex: 3,
    },
    indicatordiv1: {
      display: 'none'
    },
    indicator: {
      fontSize: 30
    },
    indicatortxt: {
      fontWeight: 'bold',
      fontSize: 15,
      marginRight: 10,
      color: '#0d0d0d'
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
    loglink3: {
      display: 'none'
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
export default Inputs
