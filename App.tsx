import { StyleSheet, Text, View } from 'react-native';
import Carrinho from './componentes/Carrinho';
import { ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>

    <View style={styles.container}>

      <Text style={styles.prodText} >Produtos</Text>

      <Carrinho />
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  //container geral 
  
  container: {
    backgroundColor: 'black',
  },

  // texto "produto"
  prodText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 45,
  }

});
