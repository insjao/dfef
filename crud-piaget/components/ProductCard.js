import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <Image
        source={require('../img/tenis_vans_knu_skool_black_white_2421_1_b904b8dd4ec76316dd6ab11765ce77eb.webp')}
        style={styles.image}
      />
      <Text style={styles.name}>Tênis Esportivo</Text>
      <Text style={styles.price}>R$ 299,99</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderRadius: 10, padding: 15, alignItems: 'center', marginTop: 10 },
  image: { width: 150, height: 150, borderRadius: 10 },
  name: { fontSize: 18, marginTop: 10 },
  price: { fontSize: 16, color: 'green', marginTop: 5 },
});
