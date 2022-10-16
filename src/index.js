import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase';
import {firebase, FieldValue} from './lib/firebase';
import './styles/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{firebase, FieldValue}}>
    <App/>
  </FirebaseContext.Provider>,
  document.getElementById('root'));

//client side rendered app: react (cra)
  // -> databse which is Firebase
  // -> react-loading-skeleton
  // tailwind

// architecture
  // folder structure
    // -> src
      // -> components
      // -> constants
      // ->context 
      // ->helpers, 
      // -> lib(firebase is going to live in here)
      // -> services(firebae function in here)
      // -> styles (tailwind's folder (app/tailwind))
