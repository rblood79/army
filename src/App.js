
import _ from 'lodash';
import './App.css';
import React, { useState } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, doc, setDoc, getDoc, getDocs } from 'firebase/firestore';
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
  const [number, setNumber] = useState(2100000000);
  const [type, setType] = useState(0);
  const [armor, setAmor] = useState(0);
  const [gloves, setGloves] = useState(0);
  const [shoes, setShoes] = useState(0);
  const [mask, setMask] = useState(0);

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
      console.log(tempDoc)
      /*const qa = query(usersRef, where("type", "==", "1"), where("mask", "==", "0"));
      const querySnapshotA = await getDocs(qa);
      console.log('//', querySnapshotA.docs.length)*/
    }
    setData(tempDoc);
    console.log( 
      _.filter(tempDoc, { 'type': '1', 'mask': '0' })
    );
  }

  const onSave = async () => {
    //console.log('onSave', number)
    await setDoc(doc(usersRef, number), {
      type: type,//army, navy, marine, special
      armor: armor,
      gloves: gloves,
      shoes: shoes,
      mask: mask,
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        part select
      </header>
      <div>
        <h2>ID</h2>
        <input type='tel' maxLength={10} placeholder="군번" onChange={({ target: { value } }) => {
          setNumber(value)
        }} />
        <button onClick={() => { onLoad(number) }}>login</button>
      </div>
      <div>
        <h2>type</h2>
        <input type='radio' name='type' id='type0' value='0' onChange={({ target: { value } }) => setType(value)} defaultChecked /><label htmlFor='type0'>army</label>
        <input type='radio' name='type' id='type1' value='1' onChange={({ target: { value } }) => setType(value)} /><label htmlFor='type1'>air force</label>
        <input type='radio' name='type' id='type2' value='2' onChange={({ target: { value } }) => setType(value)} /><label htmlFor='type2'>marrine</label>
      </div>
      <div>
        <h2>armor</h2>
        <input type='radio' name='armor' id='armor0' value='0' onChange={({ target: { value } }) => setAmor(value)} defaultChecked /><label htmlFor='armor0'>특1호</label>
        <input type='radio' name='armor' id='armor1' value='1' onChange={({ target: { value } }) => setAmor(value)} /><label htmlFor='armor1'>1호</label>
        <input type='radio' name='armor' id='armor2' value='2' onChange={({ target: { value } }) => setAmor(value)} /><label htmlFor='armor2'>2호</label>
        <input type='radio' name='armor' id='armor3' value='3' onChange={({ target: { value } }) => setAmor(value)} /><label htmlFor='armor3'>3호</label>
        <input type='radio' name='armor' id='armor4' value='4' onChange={({ target: { value } }) => setAmor(value)} /><label htmlFor='armor4'>4호</label>
        <input type='radio' name='armor' id='armor5' value='5' onChange={({ target: { value } }) => setAmor(value)} /><label htmlFor='armor5'>5호</label>
        <input type='radio' name='armor' id='armor6' value='6' onChange={({ target: { value } }) => setAmor(value)} /><label htmlFor='armor6'>6호</label>
      </div>
      <div>
        <h2>gloves</h2>
        <input type='radio' name='gloves' id='gloves0' value='0' onChange={({ target: { value } }) => setGloves(value)} defaultChecked /><label htmlFor='gloves0'>대</label>
        <input type='radio' name='gloves' id='gloves1' value='1' onChange={({ target: { value } }) => setGloves(value)} /><label htmlFor='gloves1'>중</label>
        <input type='radio' name='gloves' id='gloves2' value='2' onChange={({ target: { value } }) => setGloves(value)} /><label htmlFor='gloves2'>소</label>
      </div>
      <div>
        <h2>shoes</h2>
        <input type='radio' name='shoes' id='shoes0' value='0' onChange={({ target: { value } }) => setShoes(value)} defaultChecked /><label htmlFor='shoes0'>대</label>
        <input type='radio' name='shoes' id='shoes2' value='2' onChange={({ target: { value } }) => setShoes(value)} /><label htmlFor='shoes2'>소</label>
      </div>
      <div>
        <h2>shoes</h2>
        <input type='radio' name='mask' id='mask0' value='0' onChange={({ target: { value } }) => setMask(value)} defaultChecked /><label htmlFor='mask0'>특대</label>
        <input type='radio' name='mask' id='mask1' value='1' onChange={({ target: { value } }) => setMask(value)} /><label htmlFor='mask1'>대</label>
        <input type='radio' name='mask' id='mask2' value='2' onChange={({ target: { value } }) => setMask(value)} /><label htmlFor='mask2'>중</label>
        <input type='radio' name='mask' id='mask3' value='3' onChange={({ target: { value } }) => setMask(value)} /><label htmlFor='mask3'>소</label>
      </div>
      <div>
        <h2>controll</h2>
        <button onClick={onSave}>save</button>
        <button onClick={() => { onLoad() }}>load no parms</button>
      </div>
      <div>
        {
          data && (
            data.map((item, index) => {
              return (
                <div key={'item' + index}>
                  ID:{item.id} / type:{item.type} / armor:{item.armor} / gloves:{item.gloves} / shoes:{item.shoes} / mask:{item.mask}
                </div>
              )
            }))
        }
      </div>
    </div>
  );
}

export default App;
