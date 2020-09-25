import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const CardItem = props => {
  return (
    <View style={styles.listItem}>
        <Text>{props.title}</Text>
      <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
        <MaterialCommunityIcons name="delete-outline" color={"#000"} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  deleteBtn: {

  },
  listItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#838383',
    borderWidth: 1,
    borderRadius: 4,
    width:'100%',
    justifyContent: 'space-between',
    flexDirection: 'row'

  }
});

export default CardItem;
