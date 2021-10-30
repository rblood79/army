
import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import context from '../component/Context';
import mnd from '../assets/mnd.png';

const App = (props) => {
  const [number, setNumber] = useState(null);
  const [pw, setPw] = useState(null);

  const state = useContext(context);
  const { army, setArmy, setUser } = state;
  const [view, setView] = useState(false);
  const history = useHistory();

  let reg_num = /^[0-9]{6,10}$/; // 전화번호 숫자만

  const onCheck = async () => {
    !reg_num.test(number) ? setNumber('fail') : !reg_num.test(pw) && setPw('fail');
    if (number === 'admin' && pw === 'admin') {
      setUser(number);
      history.push('/result')
    } else if (reg_num.test(number) && pw !== 'fail' && number === pw) {
      setUser(number);
      history.push('/main')
    } else if (number && pw && number !== pw) {
      setPw('same')
    }
  }

  useEffect(() => {
    //console.log(props)
    setNumber(null)
    setPw(null)
    setArmy(null)
    setUser(null)
  }, [])

  return (
    <div className='container'>
      <div className='login'>
        <div className='visual'>
          <div className='visualText'>
            <div className='textGroup'>
              <span>군</span>
              <span>소</span><span>요</span><span>물</span><span>자</span>
              <span>신</span><span>청</span>
            </div>
            <img className='visualLogo' src={mnd} alt={'logo'} />
          </div>
        </div>
        <div>
          <div className='armyWrap'>
            {!army &&
              <>
                <div className='armyComment'><i className="ri-arrow-down-s-line"></i>소속군을 선택하세요</div>
                <div className='armySelect'>
                  <input type='radio' name='type' id='type0' value='육군' onChange={({ target: { value } }) => setArmy(value)} /><label htmlFor='type0' className='armyLeft'>육군</label>
                  <input type='radio' name='type' id='type1' value='공군' onChange={({ target: { value } }) => setArmy(value)} /><label htmlFor='type1' className='armyCenter'>공군</label>
                  <input type='radio' name='type' id='type2' value='해군' onChange={({ target: { value } }) => setArmy(value)} /><label htmlFor='type2' className='armyRight'>해군</label>
                </div>
              </>
            }
            {army &&
              <>
                <button className='back' onClick={() => {
                  setArmy(null)
                  setNumber(null)
                  setPw(null)
                  setView(false)
                }}><i className="ri-arrow-left-line"></i><span>이전</span></button>
                <div className={'input'}>
                  <input className={'id'} type='text' maxLength={10} placeholder="아이디" onChange={({ target: { value } }) => {
                    setNumber(value)
                  }} />
                </div>
                <div className={'input'}>
                  <input className={'pw'} type={view ? 'text' : 'password'} maxLength={10} placeholder="비밀번호" onChange={({ target: { value } }) => {
                    setPw(value)
                  }} />
                  <button className='passView' onClick={()=>{setView(view ? false : true)}}><i className={view ? "ri-eye-off-line" : "ri-eye-line"}></i></button>
                  <span className={'vali'}>{number === null && pw === null ? '아이디와 비번은 군번이며 "-"를 제외하고 입력하세요' : number === 'fail' ? '올바른 아이디가 아닙니다' : pw === 'fail' ? '비밀번호를 입력하세요' : pw === 'same' && '비밀번호가 일치하지 않습니다'}</span>
                </div>
              </>
            }
          </div>
          <div className='controll'>
            {
              army && (
                <button className={'button'} onClick={() => {
                  onCheck(number)
                }}>확인</button>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

App.defaultProps = {
};

export default App;