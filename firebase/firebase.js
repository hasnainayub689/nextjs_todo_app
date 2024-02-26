import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth'; // Importing getAuth function from firebase/auth
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAnscgyTWB0uFx1zW46y9MOdFvlqidm_ag',
    authDomain: 'fir-todo-app-54d3d.firebaseapp.com',
    projectId: 'fir-todo-app-54d3d',
    storageBucket: 'fir-todo-app-54d3d.appspot.com',
    messagingSenderId: '81468315989',
    appId: '1:81468315989:web:84afbed9116d6c397db7dc',
    measurementId: 'G-W7FKBSLN6T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Getting the authentication and firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);
