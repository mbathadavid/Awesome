import React from 'react'
import { StyleSheet,Text,View } from 'react-native';

function Header() {
  return (
    <View>
        <Text style={styles.header}>FARMCONNECT</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        color: '#fff',
        fontSize: 20,
        padding: 10,
        marginTop: 0,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#008000'
    }
})

export default Header
