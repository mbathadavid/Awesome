import React from 'react';
import { StyleSheet,Text,View,FlatList,TouchableOpacity } from 'react-native';
import  Icon from 'react-native-vector-icons/FontAwesome';
//import { Icon } from 'react-native-elements';

function Listing({ names }) {
  return (

    <View style={styles.listdiv}>
        <FlatList
      data={names}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
        <View>
        <Icon
        name="delete"
        />
        <Text style={styles.listing}>{item.fname}   {item.lname}</Text>
        </View>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    listdiv: {
        margin: 20,
        flex: 1
    },
    listing: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#bbb',
        borderRadius: 10,
        margin: 10,
        padding: 6
    }
})

export default Listing
