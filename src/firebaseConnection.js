import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBIB0fQZ1h_9dIJCZWib79Vtj_MPZfavao",
    authDomain: "appredepc-01.firebaseapp.com",
    projectId: "appredepc-01",
    storageBucket: "appredepc-01.appspot.com",
    messagingSenderId: "50759359087",
    appId: "1:50759359087:web:7f29a90b4fad1050d94b9a",
    measurementId: "G-Q24C9ELWFN"
  };
  

  if(!firebase.apps.lenght){

  
  //abrir minha conexão
  firebase.initializeApp(firebaseConfig);

}

export default firebase;