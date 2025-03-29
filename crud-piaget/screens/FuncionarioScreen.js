import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import app from "../factory/firebase";

export default function FuncionarioScreen() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [matricula, setMatricula] = useState('');
  const [sexo, setSexo] = useState('');

  function inserirFuncionario() {
    app.collection('cadFuncionarios')
      .add({
        nome,
        idade,
        matricula,
        sexo,
      })
      .then(() => {
        setNome('');
        setIdade('');
        setMatricula('');
        setSexo('');
        Alert.alert('Sucesso', 'Funcionário cadastrado com sucesso!');
      })
      .catch(error => {
        Alert.alert('Erro', error.message);
      });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Funcionário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <TextInput
        style={styles.input}
        placeholder="Matrícula"
        value={matricula}
        onChangeText={setMatricula}
      />

      <TextInput
        style={styles.input}
        placeholder="Sexo"
        value={sexo}
        onChangeText={setSexo}
      />

      <TouchableOpacity style={styles.button} onPress={inserirFuncionario}>
        <Text style={styles.buttonText}>Cadastrar Funcionário</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


