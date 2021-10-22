
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from "react-router-dom";
import { doc, setDoc, getDoc } from 'firebase/firestore';

const App = (props) => {
  const [active, setActive] = useState(0);
  const [number, setNumber] = useState(null);
  const [pw, setPw] = useState(null);
  const [type, setType] = useState(null);
  const [armor, setArmor] = useState(null);
  const [gloves, setGloves] = useState(null);
  const [shoes, setShoes] = useState(null);
  const [mask, setMask] = useState(null);

  const [state, setState] = useState(false);
  const [data, setData] = useState(null);

  let reg_num = /^[0-9]{6,10}$/; // 전화번호 숫자만

  const onCheck = async () => {
    //console.log('on')
    const tempDoc = [];
    !reg_num.test(number) ? setNumber('fail') : !reg_num.test(pw) && setPw('fail')
    if (reg_num.test(number) && pw !== 'fail' && number === pw) {
      //console.log('ok', reg_num.test(number))
      const docRef = doc(props.user, number);
      const docSnap = await getDoc(docRef);
      docSnap.data() && tempDoc.push({ id: number, ...docSnap.data() })
      setData(tempDoc)
    } else if (number && pw && number !== pw) {
      //console.log('fail')
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

  useMemo(() => {
    //console.log('//', armor, shoes, gloves, mask);
    if (!armor && !shoes && !gloves && !mask) {
      setActive(0)
    } else {
      setActive(active + 1)
    }
  }, [armor, shoes, gloves, mask])

  useEffect(() => {
    //console.log(props)
    setActive(0)
  }, [])

  return (
    <div className='container'>
      {
        (!data) ?
          <div className='login'>
            <h2><div className='appIcon'><img src={'./sorder0.png'} alt='화생방' /></div><span className='subTitle'>화생방 보호의 신청{!props.mobile && ' 관리'}</span></h2>
            <div>
              {
                props.mobile && !type ?
                <>
                  <div>소속군을 선택하세요</div>
                  <div className={type ? 'armySelect active' : 'armySelect'}>
                    <input type='radio' name='type' id='type0' value='육군' onChange={({ target: { value } }) => setType(value)} /><label htmlFor='type0' className='armyLeft'>육군</label>
                    <input type='radio' name='type' id='type1' value='공군' onChange={({ target: { value } }) => setType(value)} /><label htmlFor='type1' className='armyCenter'>공군</label>
                    <input type='radio' name='type' id='type2' value='해군' onChange={({ target: { value } }) => setType(value)} /><label htmlFor='type2' className='armyRight'>해군</label>
                  </div>
                </> : props.mobile &&
                <button className='back' onClick={()=>{setType(null)}}><i className="ri-arrow-left-line"></i><span>이전</span></button>
              }
              {
                (!props.mobile || type) && 
                <>
                  <div className={'input'}>
                    <input className={'id'} type='tel' maxLength={10} placeholder="아이디" onChange={({ target: { value } }) => {
                      setNumber(value)
                    }} />
                  </div>
                  <div className={'input'}>
                    <input className={'pw'} type='tel' maxLength={10} placeholder="비밀번호" onChange={({ target: { value } }) => {
                      setPw(value)
                    }} />
                    <span className={'vali'}>{number === 'fail' ? '올바른 아이디가 아닙니다' : pw === 'fail' ? '비밀번호를 입력하세요' : pw === 'same' && '비밀번호가 일치하지 않습니다'}</span>
                  </div>
                </>
              }
            </div>
            <div className='controll'>
              {
                !props.mobile ? (
                  <Link className={'button'} to={number === 'admin' && pw === 'admin' ? './result' : '/'}>로그인</Link>
                ) : type && (
                  <button className={'button'} disabled={!props.mobile ? false : type ? false : true} onClick={() => {
                    onCheck(number)
                  }}>확인</button>
                )
              }
            </div>
          </div>
          : data && data.length > 0 ?
            <div className='user'>
              <h2 className='title'>
                {!state ? <i className="ri-user-add-line"></i> : <i className="ri-user-follow-line"></i>}
                {!state ? '신청하신 내역이 있습니다' : '개인별 사이즈 신청 완료하였습니다'}
              </h2>
              <div className='comment'>{!state ? '사이즈를 변경하시려면 재신청을 누르세요' : '수고하셨습니다'}</div>
              <div className='controll'>
                <button className='buttonLeft' onClick={() => {
                  setArmor(null)
                  setShoes(null)
                  setGloves(null)
                  setMask(null)
                  setData([])
                  setActive(0)
                }}>재신청</button>
                <button className='buttonRight' onClick={() => {
                  setData(null)
                  setType(null)
                  setNumber(null)
                  setPw(null)
                  setArmor(null)
                  setShoes(null)
                  setGloves(null)
                  setMask(null)
                  setState(false)
                }}>로그아웃</button>
              </div>
            </div>
            :
            <div className='order'>
              <div>
                <h2 className='title'>
                  <div className='profile'><i className="ri-shield-user-line"></i> 안녕하세요 {type}소속 {number}님</div>
                </h2>
                <div className='accordion'>
                  <div className='accordionItem'>
                    <h3 className='accordionHead' onClick={() => { active === 0 ? setActive(null) : setActive(0) }}>보호의{armor ? ' "' + armor + '" 를 선택하였습니다' : '를 선택하세요'}</h3>
                    <div className={active === 0 ? 'accordionBodyActive' : 'accordionBody'} style={{ height: active === 0 && 48 * 7 }}>
                      <input type='radio' name='armor' id='armor0' value='특1호' onChange={({ target: { value } }) => setArmor(value)} /><label htmlFor='armor0' className='label'><span>특1호</span><span>신장 191cm이상</span></label>
                      <input type='radio' name='armor' id='armor1' value='1호' onChange={({ target: { value } }) => setArmor(value)} /><label htmlFor='armor1' className='label'><span>1호</span><span>신장 185cm - 190cm</span></label>
                      <input type='radio' name='armor' id='armor2' value='2호' onChange={({ target: { value } }) => setArmor(value)} /><label htmlFor='armor2' className='label'><span>2호</span><span>신장 180cm - 184cm</span></label>
                      <input type='radio' name='armor' id='armor3' value='3호' onChange={({ target: { value } }) => setArmor(value)} /><label htmlFor='armor3' className='label'><span>3호</span><span>신장 175cm - 179cm</span></label>
                      <input type='radio' name='armor' id='armor4' value='4호' onChange={({ target: { value } }) => setArmor(value)} /><label htmlFor='armor4' className='label'><span>4호</span><span>신장 170cm - 174cm</span></label>
                      <input type='radio' name='armor' id='armor5' value='5호' onChange={({ target: { value } }) => setArmor(value)} /><label htmlFor='armor5' className='label'><span>5호</span><span>신장 165cm - 169cm</span></label>
                      <input type='radio' name='armor' id='armor6' value='6호' onChange={({ target: { value } }) => setArmor(value)} /><label htmlFor='armor6' className='label'><span>6호</span><span>신장 165cm미만</span></label>
                    </div>
                  </div>
                  <div className='accordionItem'>
                    <h3 className='accordionHead' onClick={() => { active === 1 ? setActive(null) : setActive(1) }}>덧신{shoes ? ' "' + shoes + '" 를 선택하였습니다' : '을 선택하세요'}</h3>
                    <div className={active === 1 ? 'accordionBodyActive' : 'accordionBody'} style={{ height: active === 1 && 48 * 2 }}>
                      <input type='radio' name='shoes' id='shoes0' value='대' onChange={({ target: { value } }) => setShoes(value)} /><label htmlFor='shoes0' className='label'><span>대</span><span>발 270mm이상</span></label>
                      <input type='radio' name='shoes' id='shoes2' value='소' onChange={({ target: { value } }) => setShoes(value)} /><label htmlFor='shoes2' className='label'><span>소</span><span>발 270mm미만</span></label>
                    </div>
                  </div>
                  <div className='accordionItem'>
                    <h3 className='accordionHead' onClick={() => { active === 2 ? setActive(null) : setActive(2) }}>장갑{gloves ? ' "' + gloves + '" 를 선택하였습니다' : '을 선택하세요'}</h3>
                    <div className={active === 2 ? 'accordionBodyActive' : 'accordionBody'} style={{ height: active === 2 && 48 * 3 }}>
                      <input type='radio' name='gloves' id='gloves0' value='대' onChange={({ target: { value } }) => setGloves(value)} /><label htmlFor='gloves0' className='label'><span>대</span><span>길이 23cm이상</span></label>
                      <input type='radio' name='gloves' id='gloves1' value='중' onChange={({ target: { value } }) => setGloves(value)} /><label htmlFor='gloves1' className='label'><span>중</span><span>길이 20 - 22cm</span></label>
                      <input type='radio' name='gloves' id='gloves2' value='소' onChange={({ target: { value } }) => setGloves(value)} /><label htmlFor='gloves2' className='label'><span>소</span><span>길이 19cm이하</span></label>
                    </div>
                  </div>
                  <div className='accordionItem'>
                    <h3 className='accordionHead' onClick={() => { active === 3 ? setActive(null) : setActive(3) }}>방독면{mask ? ' "' + mask + '" 를 선택하였습니다' : '을 선택하세요'}</h3>
                    <div className={active === 3 ? 'accordionBodyActive' : 'accordionBody'} style={{ height: active === 3 && 48 * 4 }}>
                      <input type='radio' name='mask' id='mask0' value='특대' onChange={({ target: { value } }) => setMask(value)} /><label htmlFor='mask0' className='label'><span>특대</span><span>XL</span></label>
                      <input type='radio' name='mask' id='mask1' value='대' onChange={({ target: { value } }) => setMask(value)} /><label htmlFor='mask1' className='label'><span>대</span><span>L</span></label>
                      <input type='radio' name='mask' id='mask2' value='중' onChange={({ target: { value } }) => setMask(value)} /><label htmlFor='mask2' className='label'><span>중</span><span>M</span></label>
                      <input type='radio' name='mask' id='mask3' value='소' onChange={({ target: { value } }) => setMask(value)} /><label htmlFor='mask3' className='label'><span>소</span><span>S</span></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='controll'>
                <p>{armor && shoes && gloves && mask ? '선택하신 사이즈로 신청하시겠습니까' : '본인의 사이즈에 맞게 선택해주세요'}</p>
                <button className={'button'} disabled={!armor || !shoes || !gloves || !mask} onClick={() => {
                  onSave()
                }}>신청</button>
              </div>
            </div>
      }
    </div>
  );
}

App.defaultProps = {
};

export default App;