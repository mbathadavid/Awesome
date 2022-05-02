import React from 'react';
import { StyleSheet,Text,View,FlatList,TouchableOpacity } from 'react-native';
//import  Icon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements';

function Listing({ names }) {
  const pressHandler = (id) => {
    console.log(id)
  }

  return (
    <View style={styles.listdiv}>
        <FlatList
      data={names}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
        <View style={styles.listing}>
        <Icon
        name="delete"
        />
        <Text style={styles.itemText}>{item.fname}   {item.lname}</Text>
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
        flex: 1,
    },
    listing: {
        fontSize: 20,
        color: 'black',
        flexDirection: 'row',
        //textAlign: 'center',
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#bbb',
        borderRadius: 10,
        margin: 10,
        padding: 6,
    },
    list: {
      flex: 1,
    },
    itemText: {
      marginLeft: 10,
      color: 'black',
      fontWeight: 'bold',
    }
})

export default Listing
