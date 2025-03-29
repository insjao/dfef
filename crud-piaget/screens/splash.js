import { SafeAreaView, StyleSheet, Image } from 'react-native';

export default function Splash({ navigation }) {
  async function prepare() {
    try {
      await new Promise((tempo) => setTimeout(tempo, 2000));
    } catch (e) {
      Alert.alert(e);
    } finally {
      navigation.navigate('Login');
    }
  }
  prepare();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../img/831276.png')}
        style={{ width: '80%', height: '50%', resizeMode: 'contain' }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f001c',
  },
});

