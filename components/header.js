import React from 'react'
import { StyleSheet,Text,View } from 'react-native';

function Header() {
  return (
    <View>
        <Text style={styles.header}>Names List</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        color: '#fff',
        fontSize: 20,
        padding: 10,
        marginTop: 0,
        textAlign: 'center',
        backgroundColor: 'coral'
    }
})

export default Header
