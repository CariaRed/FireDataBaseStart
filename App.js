import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import firebase from './src/firebaseConnection';

console.disableYellowBox=true;
export default function App() {
  const [nome, setNome] = useState('Carregando...')
  const [idade, setIdade] = useState('');

  useEffect(() => {

    async function dados (){
      //olheiro da nossa DATABASE

      //await firebase.database().ref('usuario/3').on('value', (snapshot) => {
        //setNome(snapshot.val().nome);
        //setIdade(snapshot.val().idade);

      //});

      // await firebase.database().ref('Cargo').set('Programador')
      await firebase.database().ref('Cargo').remove('')


    }

    dados()




  }, [])


  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25}}>Ola {nome}</Text>
      <Text style={{fontSize: 25}}>Idade {idade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
    
});
