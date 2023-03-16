import Formulario from './componentes/Formulario';
import React from 'react';
import { ScrollView, StyleSheet, } from 'react-native';

const App = () => {
  return (

    <ScrollView style={styles.container}>

      <Formulario />

    </ScrollView>
  );
}




const styles = StyleSheet.create({

  container: {
    padding: 15,
    backgroundColor: 'lightcyan',
    },
});
export default App;

