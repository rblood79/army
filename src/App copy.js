
import _ from 'lodash';
import { Route } from "react-router-dom";
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
  const [type, setType] = useState('육군');
  const [armor, setAmor] = useState('특1호');
  const [gloves, setGloves] = useState('대');
  const [shoes, setShoes] = useState('대');
  const [mask, setMask] = useState('특대');

  const [data, setData] = useState(null);
  const [result, setResult] = useState(
    {
      육군: {
        armor: {
          '특1호': [],
          '1호': [],
          '2호': [],
          '3호': [],
          '4호': [],
          '5호': [],
          '6호': [],
          '소계': [''],
        },
        shoes: {
          '대': [],
          '소': [],
          '소계': [''],
        },
        gloves: {
          '대': [],
          '중': [],
          '소': [],
          '소계': [''],
        },
        mask: {
          '특대': [],
          '대': [],
          '중': [],
          '소': [],
          '소계': [''],
        }
      },
      공군: {
        armor: {
          '특1호': [],
          '1호': [],
          '2호': [],
          '3호': [],
          '4호': [],
          '5호': [],
          '6호': [],
          '소계': [''],
        },
        shoes: {
          '대': [],
          '소': [],
          '소계': [''],
        },
        gloves: {
          '대': [],
          '중': [],
          '소': [],
          '소계': [''],
        },
        mask: {
          '특대': [],
          '대': [],
          '중': [],
          '소': [],
          '소계': [''],
        }
      },
      해군: {
        armor: {
          '특1호': [],
          '1호': [],
          '2호': [],
          '3호': [],
          '4호': [],
          '5호': [],
          '6호': [],
          '소계': [''],
        },
        shoes: {
          '대': [],
          '소': [],
          '소계': [''],
        },
        gloves: {
          '대': [],
          '중': [],
          '소': [],
          '소계': [''],
        },
        mask: {
          '특대': [],
          '대': [],
          '중': [],
          '소': [],
          '소계': [''],
        }
      }
    }
  );

  const groupBy = (data, key, sum) => {
    return data.reduce(function (carry, el) {
      var group = el[key];
      if (carry[group] === undefined) {
        carry[group] = []
      }
      carry[group].push(el)
      if (sum) {
        carry['소계'] = [data.length];
      }
      return carry
    }, {})
  }

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
      //console.log(tempDoc)
      /*const qa = query(usersRef, where("type", "==", "1"), where("mask", "==", "0"));
      const querySnapshotA = await getDocs(qa);
      console.log('//', querySnapshotA.docs.length)*/
    }
    //setData(_.filter(tempDoc, {'armor': '특1호' }));
    //console.log('aaa', _.filter(tempDoc, {'armor': '특1호' }).length )
    const _type = groupBy(tempDoc, 'type');
    const tempObj = {}
    _.map(_type, (item, key) => {
      const _item = tempObj[key] = {}
      _item.armor = groupBy(item, 'armor', true)
      _item.shoes = groupBy(item, 'shoes', true)
      _item.gloves = groupBy(item, 'gloves', true)
      _item.mask = groupBy(item, 'mask', true)
    });
    //console.log(tempObj)
    const mergeObj = _.merge({}, result, tempObj);
    setResult(mergeObj);
    setData(tempDoc);
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
        <input type='radio' name='type' id='type0' value='육군' onChange={({ target: { value } }) => setType(value)} defaultChecked /><label htmlFor='type0'>육군</label>
        <input type='radio' name='type' id='type1' value='공군' onChange={({ target: { value } }) => setType(value)} /><label htmlFor='type1'>공군</label>
        <input type='radio' name='type' id='type2' value='해군' onChange={({ target: { value } }) => setType(value)} /><label htmlFor='type2'>해군</label>
      </div>
      <div>
        <h2>armor</h2>
        <input type='radio' name='armor' id='armor0' value='특1호' onChange={({ target: { value } }) => setAmor(value)} defaultChecked /><label htmlFor='armor0'>특1호</label>
        <input type='radio' name='armor' id='armor1' value='1호' onChange={({ target: { value } }) => setAmor(value)} /><label htmlFor='armor1'>1호</label>
        <input type='radio' name='armor' id='armor2' value='2호' onChange={({ target: { value } }) => setAmor(value)} /><label htmlFor='armor2'>2호</label>
        <input type='radio' name='armor' id='armor3' value='3호' onChange={({ target: { value } }) => setAmor(value)} /><label htmlFor='armor3'>3호</label>
        <input type='radio' name='armor' id='armor4' value='4호' onChange={({ target: { value } }) => setAmor(value)} /><label htmlFor='armor4'>4호</label>
        <input type='radio' name='armor' id='armor5' value='5호' onChange={({ target: { value } }) => setAmor(value)} /><label htmlFor='armor5'>5호</label>
        <input type='radio' name='armor' id='armor6' value='6호' onChange={({ target: { value } }) => setAmor(value)} /><label htmlFor='armor6'>6호</label>
      </div>
      <div>
        <h2>shoes</h2>
        <input type='radio' name='shoes' id='shoes0' value='대' onChange={({ target: { value } }) => setShoes(value)} defaultChecked /><label htmlFor='shoes0'>대</label>
        <input type='radio' name='shoes' id='shoes2' value='소' onChange={({ target: { value } }) => setShoes(value)} /><label htmlFor='shoes2'>소</label>
      </div>
      <div>
        <h2>gloves</h2>
        <input type='radio' name='gloves' id='gloves0' value='대' onChange={({ target: { value } }) => setGloves(value)} defaultChecked /><label htmlFor='gloves0'>대</label>
        <input type='radio' name='gloves' id='gloves1' value='중' onChange={({ target: { value } }) => setGloves(value)} /><label htmlFor='gloves1'>중</label>
        <input type='radio' name='gloves' id='gloves2' value='소' onChange={({ target: { value } }) => setGloves(value)} /><label htmlFor='gloves2'>소</label>
      </div>
      <div>
        <h2>mask</h2>
        <input type='radio' name='mask' id='mask0' value='특대' onChange={({ target: { value } }) => setMask(value)} defaultChecked /><label htmlFor='mask0'>특대</label>
        <input type='radio' name='mask' id='mask1' value='대' onChange={({ target: { value } }) => setMask(value)} /><label htmlFor='mask1'>대</label>
        <input type='radio' name='mask' id='mask2' value='중' onChange={({ target: { value } }) => setMask(value)} /><label htmlFor='mask2'>중</label>
        <input type='radio' name='mask' id='mask3' value='소' onChange={({ target: { value } }) => setMask(value)} /><label htmlFor='mask3'>소</label>
      </div>
      <div>
        <h2>controll</h2>
        <button onClick={onSave}>save</button>
        <button onClick={() => { onLoad() }}>load no parms</button>
      </div>
      <div className='tableContainer'>
        <div className='tableContents'>
          <table className='table'>
            <thead>
              <tr>
                <th rowSpan='2'>군</th>
                <th rowSpan='2'>소속</th>
                <th colSpan='8'>화생방 보호의</th>
                <th colSpan='3'>덧신</th>
                <th colSpan='4'>장갑</th>
                <th colSpan='5'>방독면</th>
              </tr>
              <tr>
                <th>특1호</th>
                <th>1호</th>
                <th>2호</th>
                <th>3호</th>
                <th>4호</th>
                <th>5호</th>
                <th>6호</th>
                <th className='sum'>소계</th>
                <th>대</th>
                <th>소</th>
                <th className='sum'>소계</th>
                <th>대</th>
                <th>중</th>
                <th>소</th>
                <th className='sum'>소계</th>
                <th>특대</th>
                <th>대</th>
                <th>중</th>
                <th>소</th>
                <th className='sum'>소계</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.entries(result).map((item) =>
                  <tr key={item[0] + item[1]}>
                    <td>{item[0]}</td>
                    <td>-</td>
                    {
                      Object.entries(item[1]).map((item) =>
                        Object.entries(item[1]).map((item, i) =>
                          <td key={item[0] + item[1]} className={item[0] === '소계' ? 'sum' : null}>
                            {item[0] === '소계' ? item[1] : item[1].length > 0 ? item[1].length : null}
                          </td>
                        )
                      )
                    }
                  </tr>
                )
              }
            </tbody>
            <tfoot>
              <tr>
                <th colSpan='2'>계</th>
                <th>{data && _.filter(data, {'armor': '특1호' }).length}</th>
                <th>{data && _.filter(data, {'armor': '1호' }).length}</th>
                <th>{data && _.filter(data, {'armor': '2호' }).length}</th>
                <th>{data && _.filter(data, {'armor': '3호' }).length}</th>
                <th>{data && _.filter(data, {'armor': '4호' }).length}</th>
                <th>{data && _.filter(data, {'armor': '5호' }).length}</th>
                <th>{data && _.filter(data, {'armor': '6호' }).length}</th>
                <th>{data && data.length}</th>
                <th>{data && _.filter(data, {'shoes': '대' }).length}</th>
                <th>{data && _.filter(data, {'shoes': '소' }).length}</th>
                <th>{data && data.length}</th>
                <th>{data && _.filter(data, {'grove': '대' }).length}</th>
                <th>{data && _.filter(data, {'grove': '중' }).length}</th>
                <th>{data && _.filter(data, {'grove': '소' }).length}</th>
                <th>{data && data.length}</th>
                <th>{data && _.filter(data, {'mask': '특대' }).length}</th>
                <th>{data && _.filter(data, {'mask': '대' }).length}</th>
                <th>{data && _.filter(data, {'mask': '중' }).length}</th>
                <th>{data && _.filter(data, {'mask': '소' }).length}</th>
                <th>{data && data.length}</th>
              </tr>
            </tfoot>
          </table>
        </div>
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
