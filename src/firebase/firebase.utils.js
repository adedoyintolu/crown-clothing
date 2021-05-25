import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const config = {
  apiKey: "AIzaSyA8nqwwUJNhg8CJDP4YyUf077BDRSNEi3A",
  authDomain: "crown-db-df17c.firebaseapp.com",
  projectId: "crown-db-df17c",
  storageBucket: "crown-db-df17c.appspot.com",
  messagingSenderId: "70827249805",
  appId: "1:70827249805:web:50e191589c2ab0a2b312c4",
  measurementId: "G-7YQCJ0E5LZ"
}

firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();






const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;