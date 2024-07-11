import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6HC8dUHMmjMuyhIFfHrMlJt-la_KvrA8",
  authDomain: "ec-prueba.firebaseapp.com",
  databaseURL: "https://ec-prueba-default-rtdb.firebaseio.com",
  projectId: "ec-prueba",
  storageBucket: "ec-prueba.appspot.com",
  messagingSenderId: "1070264336804",
  appId: "1:1070264336804:web:180bc301d829232cfcc131"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;