import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function MenuScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Menu Principal</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cliente')}>
        <Text style={styles.buttonText}>Cadastrar Cliente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Funcionario')}>
        <Text style={styles.buttonText}>Cadastrar Funcionário</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Produto')}>
        <Text style={styles.buttonText}>Cadastrar Produto</Text>
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
    backgroundColor: '#F5F5F5' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 30, 
    color: '#333' 
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginVertical: 12,
    elevation: 5, // Melhorar a sombra
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  buttonText: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: '600' 
  },
});



