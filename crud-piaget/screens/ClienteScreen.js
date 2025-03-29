import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { db } from "../factory/firebase";

export default function ClienteScreen() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');

  function inserirCliente() {
    db.collection('cadCliente')
      .add({
        nome,
        idade,
        cpf,
        endereco,
      })
      .then(() => {
        setNome('');
        setIdade('');
        setCpf('');
        setEndereco('');
        Alert.alert('Sucesso', 'Cliente cadastrado com sucesso!');
      })
      .catch(error => {
        Alert.alert('Erro', error.message);
      });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Cliente</Text>

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
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      <TouchableOpacity style={styles.button} onPress={inserirCliente}>
        <Text style={styles.buttonText}>Cadastrar Cliente</Text>
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

