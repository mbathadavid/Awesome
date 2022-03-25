import React from 'react';
import { StyleSheet,Text,View,FlatList,TextInput,Button } from 'react-native';

function Sandbox() {
  return (
    <View style={styles.container}>
        <Text>This is the sandbox app</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#ddd',
    }
})

export default Sandbox
