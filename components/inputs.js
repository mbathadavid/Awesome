import React, { useState } from 'react';
import { StyleSheet,Text,View,FlatList,TextInput,Button } from 'react-native';

function Inputs({ submitHandler }) {
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');

  return (
    <View style={styles.form}>
     <TextInput
     style={styles.input}
     onChangeText={(val) => setFname(val)}
     placeholder='Enter Fname'
     />

    <TextInput
     style={styles.input}
     onChangeText={(val) => setLname(val)}
     placeholder='Enter Sname'
     />

     <Button onPress={() => submitHandler(fname,lname)} title='Add Name'/>
    </View>
  )
}

const styles = StyleSheet.create({
    form: {
        padding: 20,
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        borderBottomWidth: 2,
        borderBottomColor: "orange",
        backgroundColor: '#ddd',
        color: 'red'
    }
})
export default Inputs
