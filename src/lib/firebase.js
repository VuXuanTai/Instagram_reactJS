import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import {getStorage} from 'firebase/storage';

//import {seedDatabase} from '../seed';
const config ={
    apiKey: "AIzaSyAg5uEyoohpye5awc73nnECERGVFzMbzSI",
    authDomain: "instagram-383ac.firebaseapp.com",
    projectId: "instagram-383ac",
    storageBucket: "instagram-383ac.appspot.com",
    messagingSenderId: "997327887902",
    appId: "1:997327887902:web:278a0c35def78b216d580f"
};

//const storage = getStorage(config);
const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;

//seedDatabase(firebase);


export {firebase, FieldValue};
