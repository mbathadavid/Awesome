import React, { useState,useContext,useEffect,useRef } from 'react';
import { StyleSheet,Text,View,ActivityIndicator,FlatList,TextInput,Button,ImageBackground,TouchableOpacity,Alert,Keyboard,TouchableWithoutFeedback } from 'react-native';
import Header from './header';
import axios from 'axios';
import { userContext } from '../userContext';

function Login({ navigation }) {
  const user = useContext(userContext);
  const isMounted = useRef(false);
  const [emailorphone,setEmailorPhone] = useState("");
  const [password,setPassword] = useState("");
  const [resvisibility,setResVisibility] = useState(0);
  const [regresponse,setRegResponse] = useState('');
  const [indicatorval,setIndicatorVal] = useState(0);
  const [userdetails,setUserDetails] = useState([]);

  const loginHandler = () => {
    if (emailorphone.length < 3) {
      Alert.alert('OOPS!', 'The Email or Phone field cannot be empty.', [
        {text: 'Understood', onPress: () => console.log('Alert Closed')}
      ])
    } else if(password.length < 3){
      Alert.alert('OOPS!', 'The last password field cannot be empty', [
        {text: 'Understood', onPress: () => console.log('Alert Closed')}
      ]) 
      } else {
        setIndicatorVal(1)
        axios({
          method: 'POST',
            url: 'https://munyaoapi.herokuapp.com/api/loginapiuser',
            headers: {
              'Content-Type': 'application/json',
              'Accept' : 'application/json'
            },
          data: JSON.stringify({
            'email' : emailorphone,
            'password' : password,
          })
        })
        .then((response) => {
          if (response.data.status == 200) {
            setIndicatorVal(0)
            setUserDetails(response.data.messages)

            const details = response.data.messages;

            user.setLoggedInuserDetails({
              userno: details.id,
              fname: details.fname,
              lname: details.lname,
              email: details.email,
              phone: details.phone,
              loggedstatus: true
            });

            console.log(response.data.messages)
          } else if(response.data.status == 400) {
            setResVisibility(1)
            setIndicatorVal(0)
            setRegResponse(response.data.messages)
            console.log(response.data.messages) 
          } else if(response.data.status == 401) {
            setResVisibility(1)
            setIndicatorVal(0)
            setRegResponse(response.data.messages)
            console.log(response.data.messages)
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

  useEffect(() => {
    if (isMounted.current) {
       console.log(user.loggeduserdetails);
       navigation.navigate('ToDashBoard');
    } else {
       isMounted.current = true;
    }
  },[user.loggeduserdetails])


  return (
    <ImageBackground
      source={ require('../images/Maize-Production.png') }
      style={styles.backgoundimg}
    >
      <Header/>

    <View style={indicatorval > 0 ? styles.indicatordiv : styles.indicatordiv1}>
      <ActivityIndicator color="#0d0d0d" style={styles.indicator} size="large"/>
      <Text style={styles.indicatortxt}>Please Wait...</Text>
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
      <Text style={styles.formheader}>Enter your Email or Phone Number and password to Log In</Text>
    <TextInput
     style={styles.input}
     keyboardType="default"
     onChangeText={(val) => setEmailorPhone(val)}
     placeholder='Enter Email or Phone Number'
     />
    <TextInput
     style={styles.input}
     onChangeText={(val) => setPassword(val)}
     placeholder='Enter your password'
     />

     <Button onPress={() => loginHandler()} title='LOG IN'/>
      <TouchableOpacity onPress={() => navigation.navigate('ResetPass')}><Text style={styles.forgotpasslink}>Forgot Password? Click here to reset</Text></TouchableOpacity>

      <View>
     <Text style={styles.loglink1}>Do not have an Account?</Text>
     <TouchableOpacity onPress={() => navigation.navigate('SignUp')}><Text style={styles.loglink2}>REGISTER AN ACCOUNT</Text></TouchableOpacity>
     </View>

    </View>
    </TouchableWithoutFeedback>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgoundimg: {
    flex: 1
  },
  forgotpasslink: {
    color: 'black',
    fontWeight: 'bold',
    padding: 3,
    marginTop: 3,
    textAlign: 'center',
    backgroundColor: '#ff3385',
    borderBottomWidth: 5,
    borderBottomColor: '#ff0000'
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
export default Login
