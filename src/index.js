import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './storage/firabaseContext'
import Context from './storage/firabaseContext';
import firebase from './firebase/config'

ReactDOM.render(

<FirebaseContext.Provider value={{firebase}}>
<Context>
<App />
</Context>
</FirebaseContext.Provider>


, document.getElementById('root'));
