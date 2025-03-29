import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import app from "../factory/firebase";

export default function ProdutoScreen() {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [marca, setMarca] = useState('');
  const [categoria, setCategoria] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [cor, setCor] = useState('');
  const [codigobarras, setCodigoBarras] = useState('');
  const [descricao, setDescricao] = useState('');
  const [fornecedor, setFornecedor] = useState('');

  function inserirProduto() {
    app.collection('cadProdutos')
      .add({
        nome,
        valor,
        tamanho,
        marca,
        categoria,
        quantidade,
        cor,
        codigobarras,
        descricao,
        fornecedor,
      })
      .then(() => {
        setNome('');
        setValor('');
        setTamanho('');
        setMarca('');
        setCategoria('');
        setQuantidade('');
        setCor('');
        setCodigoBarras('');
        setDescricao('');
        setFornecedor('');
        Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
      })
      .catch(error => {
        Alert.alert('Erro', error.message);
      });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Produto</Text>

      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Valor" keyboardType="numeric" value={valor} onChangeText={setValor} />
      <TextInput style={styles.input} placeholder="Tamanho" value={tamanho} onChangeText={setTamanho} />
      <TextInput style={styles.input} placeholder="Marca" value={marca} onChangeText={setMarca} />
      <TextInput style={styles.input} placeholder="Categoria" value={categoria} onChangeText={setCategoria} />
      <TextInput style={styles.input} placeholder="Quantidade" keyboardType="numeric" value={quantidade} onChangeText={setQuantidade} />
      <TextInput style={styles.input} placeholder="Cor" value={cor} onChangeText={setCor} />
      <TextInput style={styles.input} placeholder="Código de Barras" keyboardType="numeric" value={codigobarras} onChangeText={setCodigoBarras} />
      <TextInput style={[styles.input, styles.textArea]} placeholder="Descrição" value={descricao} onChangeText={setDescricao} multiline />
      <TextInput style={styles.input} placeholder="Fornecedor" value={fornecedor} onChangeText={setFornecedor} />

      <TouchableOpacity style={styles.button} onPress={inserirProduto}>
        <Text style={styles.buttonText}>Cadastrar Produto</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
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
  textArea: {
    height: 80,
    textAlignVertical: 'top',
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
