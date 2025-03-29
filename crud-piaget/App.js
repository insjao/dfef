import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import ClienteScreen from './screens/ClienteScreen';
import FuncionarioScreen from './screens/FuncionarioScreen';
import ProdutoScreen from './screens/ProdutoScreen';
import Splash from './screens/splash';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Cliente" component={ClienteScreen} />
        <Stack.Screen name="Funcionario" component={FuncionarioScreen} />
        <Stack.Screen name="Produto" component={ProdutoScreen} />
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
