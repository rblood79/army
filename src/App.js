
import { isMobile } from 'react-device-detect';
import { Route } from "react-router-dom";
import './App.css';
import React, { useEffect, useState } from 'react';


import Head from './component/Head';
import Foot from './component/Foot';

import Home from './page/Home';
import Result from './page/Result';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4lFYlGsKryHvQUF5CT3wUdhnU_uQBVUA",
  authDomain: "army-c3fb4.firebaseapp.com",
  projectId: "army-c3fb4",
  storageBucket: "army-c3fb4.appspot.com",
  messagingSenderId: "806478232160",
  appId: "1:806478232160:web:893774803a8773caa12105",
  measurementId: "G-SX7YFMRCJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersRef = collection(db, "users");

const App = (props) => {
  useEffect(() => {
    console.log(props.location.pathname)
  }, [])
  return (
    <div className={isMobile ? "App mobile" : "App"}>
      {props.location.pathname === '/' ?  <div /> : props.location.pathname === '/result' &&  <Head />}
      <main className='main'>
        <Route exact path="/" render={() => <Home user={usersRef} />} />
        <Route path="/result" render={() => <Result user={usersRef} />} />
      </main>
      <Foot />
    </div>
  );
}

export default App;
