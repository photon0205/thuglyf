import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import tl from './fire'
import Home from './pages/home/home';
import Login from './pages/login/login';
import Signup from './pages/register/signup';

function App(){
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );

}

const Raw = () =>{
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () =>{
    setEmail('');
    setPassword('');
  }
  
  const clearErrors = () =>{
    setEmailError('');
    setPasswordError('');
  }
  const handleLogin = () => {
    clearErrors();
    tl
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err: any) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
        }
      })
  }
  const handleSignup = () => {
    clearErrors();
    tl
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err: any) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleLogout = () =>{
    tl.auth().signOut();
  }

  const authListener = () =>{
    tl.auth().onAuthStateChanged((user : any) => {
      if(user){
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  }

  useEffect(() => {
    authListener();
  }, [])

  return(
    <div className="App">
      {user ? (
         <Home />
      ) : (
        <Login />
      )}
    </div>
  );
};



export default App;
