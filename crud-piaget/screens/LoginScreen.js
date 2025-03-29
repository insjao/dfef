import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Firebase from '../factory/firebase';

export default function Telalogin({ navigation }) {
  const [email, pegaEmail] = useState('');
  const [senha, pegaSenha] = useState('');

  function Cadastraremail() {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(() => {
        alert('Cadastrado com sucesso');
        pegaEmail('');
        pegaSenha('');
        navigation.navigate('Home');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('Email já existe. Faça login.');
          navigation.navigate('Home');
        } else if (error.code === 'auth/invalid-email') {
          alert('Email inválido');
        } else {
          alert(error.message);
        }
      });
  }

  function Logar() {
    Firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        navigation.navigate('Menu');
      })
      .catch(() => {
        alert('Usuário não cadastrado ou senha incorreta');
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={pegaEmail}
        placeholder="Digite seu e-mail"
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={pegaSenha}
        placeholder="Senha"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={Logar}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.cadastrarButton]} onPress={Cadastraremail}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 26,
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
    elevation: 3, // Efeito de sombra no Android
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
  cadastrarButton: {
    backgroundColor: '#28A745',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


