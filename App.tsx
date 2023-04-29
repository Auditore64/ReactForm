import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaHome from './telas/TelaHome';
import { NavigationContainer } from '@react-navigation/native';
import Tela1 from './telas/Tela1';
import Tela2 from './telas/Tela2';
import Tela3 from './telas/Tela3';

/*
é preciso criar um stack navigator para que ele possa acessar as telas
*/
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/*
      todo o codigo  precisa ficar dentro do contâiner de navegação
      (navigation container)
      */}
      <Stack.Navigator>
        {/*definindo as telas que poderão ser navegadas 
        todas as telas que forem ser navegadas 
        precisam ser colocadas aqui
        dentro do stack navigator que fica dentro do navigation conttainer
        */}
        <Stack.Screen
          name="TelaHome"
          component={TelaHome}
          options={{ title: 'Tela Principal' }}
        />

        <Stack.Screen
          name="Tela1"
          component={Tela1}
          options={{ title: 'Tela 1' }}
        />
        <Stack.Screen
          name="Tela2"
          component={Tela2}
          options={{ title: 'Tela 2' }}
        />
        <Stack.Screen
          name="Tela3"
          component={Tela3}
          options={{ title: 'Tela 3' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  //container geral
  container: {
    backgroundColor: 'white',
  },
  // texto "produto"
  prodText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 45,
  }
});
