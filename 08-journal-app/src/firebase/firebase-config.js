// El nombre del archivo daba lo mismo
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Esto se saca de la página de firebase:
// primero registre una app web y esto de abajo sale cuando
// dice agrega el sdk de firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyCr-lFZCQylcPfiqifpN7NT8-ZcoQw2hmU",
//     authDomain: "ract-course-65797.firebaseapp.com",
//     projectId: "ract-course-65797",
//     storageBucket: "ract-course-65797.appspot.com",
//     messagingSenderId: "179850406453",
//     appId: "1:179850406453:web:0de54a7ffba867eb4c1f7c"
//   };

// // En este caso creamos dos proyectos en firebase para simular la bdd de dev/prod y la de testing
// const firebaseConfigTesting = {
//     apiKey: "AIzaSyAPLEEmxIowoy2g2t7DgbtbFtmcYrnqnxw",
//     authDomain: "react-course-testing.firebaseapp.com",
//     projectId: "react-course-testing",
//     storageBucket: "react-course-testing.appspot.com",
//     messagingSenderId: "334482965407",
//     appId: "1:334482965407:web:6777df95afee34159373aa"
// };

// if( process.env.NODE_ENV ==='test' )
// { 
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfigTesting);
// }
// else
// {
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// }


// Es mejor hacer lo anterior con variables de entorno
const firebaseConfig = {
      apiKey: process.env.REACT_APP_APIKEY,
      authDomain: process.env.REACT_APP_AUTHDOMAIN,
      projectId: process.env.REACT_APP_PROJECTID,
      storageBucket: process.env.REACT_APP_STORAGEBUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
      appId: process.env.REACT_APP_APPID
    };
firebase.initializeApp(firebaseConfig);

// Referencia a la db
const db = firebase.firestore();

// authProvider para hacer autenticación con google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}