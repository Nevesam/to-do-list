import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const CardInput = props => {
  const [addedTask, setAddedTask] = useState('');

  const goalInputHandler = enteredText => {
    setAddedTask(enteredText);
  };

  const addTaskHandler = () => {
    props.onAddTask(addedTask);
    setAddedTask('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="digite aqui a nova tarefa"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={addedTask}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={addTaskHandler} style={styles.button}>
            <Text style={styles.buttonTxt}>Adicionar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.onCancel} style={styles.cancelButton}>
            <Text style={styles.cancelTxt}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '90%',
    backgroundColor: '#03A6A6',
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
  },
  buttonTxt: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    textTransform: 'uppercase'
  },
  cancelButton: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    padding: 10
  },
  cancelTxt: {
    color: '#03A6A6'
  }
});

export default CardInput;
