
import React, { useState } from 'react';

import { doc, setDoc, getDoc } from 'firebase/firestore';

const App = (props) => {
  const [number, setNumber] = useState(null);
  const [pw, setPw] = useState(null);
  const [type, setType] = useState('육군');
  const [armor, setAmor] = useState('특1호');
  const [gloves, setGloves] = useState('대');
  const [shoes, setShoes] = useState('대');
  const [mask, setMask] = useState('특대');

  const [state, setState] = useState(null);
  const [data, setData] = useState(null);

  let reg_num = /^[0-9]{10,10}$/; // 전화번호 숫자만
  
  const onCheck = async () => {
    !reg_num.test(number) && setNumber('fail')
    !reg_num.test(pw) && setPw('fail')
    const tempDoc = [];
    if (number && pw !== 'fail' && number === pw) {
      const docRef = doc(props.user, number);
      const docSnap = await getDoc(docRef);
      docSnap.data() && tempDoc.push({ id: number, ...docSnap.data() })
      setData(tempDoc)
    } else if (number && pw && number !== pw) {
      setPw('same')
    }
  }

  const onSave = async () => {
    //console.log('onSave', number)
    await setDoc(doc(props.user, number), {
      type: type,
      armor: armor,
      gloves: gloves,
      shoes: shoes,
      mask: mask,
    });
    setState(true)
    onCheck()
  }

  return (
    <div className='container'>
      {
        (!data) ?
          <div className='login'>
            <h2>로그인</h2>
            <div>
              <input type='radio' name='type' id='type0' value='육군' onChange={({ target: { value } }) => setType(value)} defaultChecked /><label htmlFor='type0'>육군</label>
              <input type='radio' name='type' id='type1' value='공군' onChange={({ target: { value } }) => setType(value)} /><label htmlFor='type1'>공군</label>
              <input type='radio' name='type' id='type2' value='해군' onChange={({ target: { value } }) => setType(value)} /><label htmlFor='type2'>해군</label>
            </div>
            <div className={'input'}>
              <input type='tel' maxLength={10} placeholder="군번" onChange={({ target: { value } }) => {
                setNumber(value)
              }} />
              <span className={'vali'}>{number === 'fail' && '올바른 군번이 아닙니다'}</span>
            </div>
            <div className={'input'}>
              <input type='tel' maxLength={10} placeholder="비밀번호" onChange={({ target: { value } }) => {
                setPw(value)
              }} />
              <span className={'vali'}>{pw === 'fail' ? '비밀번호를 입력하세요' : pw === 'same' && '비밀번호가 일치하지 않습니다'}</span>
            </div>
            <button onClick={() => {
              onCheck(number)
            }}>조회</button>
          </div>
          : data && data.length > 0 ?
            <div className='user'>
              <h2>{!state ? '신청 내역이 있습니다' : '신청완료되었습니다'}</h2>
              <div>
                <div>{data[0].type} 보호의{data[0].armor} / 덧신{data[0].shoes} / 장갑{data[0].gloves} / 방독면{data[0].mask}</div>
                <button onClick={() => setData([])}>재신청</button>
                <button onClick={() => {
                  setData(null)
                  setNumber(null)
                  setPw(null)
                }}>로그아웃</button>
              </div>

            </div>
            :
            <div className='order'>
              <h2>{type}{number}님 선택해주세요</h2>
              <div>
                <h3>armor</h3>
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
                <p>신청완료시 자동 로그아웃 됩니다</p>
                <button onClick={onSave}>save</button>
              </div>
            </div>
      }
    </div>
  );
}

App.defaultProps = {
};

export default App;