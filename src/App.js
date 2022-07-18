import React from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { FirebaseContext, AuthContext } from './storage/firabaseContext';
import PostWrapper from './storage/postContext';



/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import View from './Components/View/View';





function App() {

const {firebase} = useContext(FirebaseContext)
const {setUser} = useContext(AuthContext)


useEffect(()=>{

  firebase.auth().onAuthStateChanged((client)=>{

    setUser(client);
    

  })

})


  return (
    <div>
      <BrowserRouter>
      <PostWrapper>
      <Route exact path={'/'}>
      <Home />
      </Route>
      <Route path={'/signup'}>
      <Signup />
      </Route>
      <Route path={'/login'}>
      <Login />
      </Route>
      <Route path={'/create'}>
      <Create />
      </Route>
      <Route path={'/view'}>
      <View />
      </Route>
      </PostWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
