import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, doc, setDoc, getDoc, getDocs} from 'firebase/firestore';
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

function App() {
  //const [number, setNumber] = useState(0);
  const [data, setData] = useState(null);

  const onLoad = async (id) => {
    const tempDoc = [];
    if (id) {
      const docRef = doc(usersRef, id);
      const docSnap = await getDoc(docRef);
      docSnap.data() && tempDoc.push({ id: id, ...docSnap.data() })
    } else {
      const q = query(usersRef, where("type", "!=", ""));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        tempDoc.push({ id: doc.id, ...doc.data() })
      });
    }
    setData(tempDoc);
  }

  const onSave = async () => {
    console.log('onSave')
    await setDoc(doc(usersRef, "0008"), {
      type: 'special',//army, navy, marine, special
      armor: '4',
      gloves: 's',
      shoes: 'm',
      mask: 'l',
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        {data && data.length}
      </header>
      <div>
      {
        data && (
          data.map((item, index) => {
            return (
              <div key={'item'+index}>
                type:{item.type} / armor:{item.armor} / gloves:{item.gloves} / shoes:{item.shoes} / mask:{item.mask}
              </div>
            )
          }))
      }
        </div>
      <button onClick={onSave}>save</button>
      <button onClick={() => { onLoad('0001') }}>load</button>
      <button onClick={() => { onLoad() }}>load no parms</button>
    </div>
  );
}

export default App;
