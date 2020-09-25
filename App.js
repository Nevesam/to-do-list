import React, { useState } from 'react';
import { StyleSheet, View, Alert, FlatList, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import CardItem from './components/CardItem';
import CardInput from './components/CardInput';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Home = () => {
  const [lista, setLista] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTask = todoTitle => {
    setLista(currentList => [
      ...currentList,
      { id: Math.random().toString(), value: todoTitle }
    ]);
    setIsAddMode(false);
  };

  const deleteTask = taskId => {
    Alert.alert('Tem certeza?', 'Quer mesmo deletar essa tarefa?', [
      { text: 'Não', style: 'default' },
      {
        text: 'JUST DO IT!',
        style: 'destructive',
        onPress: () => {
          setLista(currentList => {
            return currentList.filter(task => task.id !== taskId);
          });
        }
      }
    ]);   
  };
  const cancelTaskAdd = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.button} onPress={() => setIsAddMode(true)}>
        <MaterialCommunityIcons name="plus" color={"#fff"} size={20} />
        <Text style={styles.buttonTxt}>Adicionar nova Tarefa</Text>
      </TouchableOpacity>
      <CardInput
        visible={isAddMode}
        onAddTask={addTask}
        onCancel={cancelTaskAdd}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={lista}
        renderItem={itemData => (
          <CardItem
            id={itemData.item.id}
            onDelete={deleteTask}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight + 20,
    marginBottom: 20,
    padding: 16
  },
  button: {
    width: '100%',
    backgroundColor: '#03A6A6',
    borderRadius: 4,
    marginBottom: 10,
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonTxt: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    textTransform: 'uppercase'
  }
});

export default Home;