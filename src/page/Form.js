
import React, { useContext, useState, useEffect, useMemo } from 'react';
import { useHistory } from "react-router-dom";
import { doc, setDoc, getDoc } from 'firebase/firestore';
import context from '../component/Context';
const App = (props) => {
  const history = useHistory();
  const state = useContext(context);
  const { army, setArmy, user, setUser } = state;
  const [data, setData] = useState(null);
  const [flag, setFlag] = useState(false);
  const [active, setActive] = useState(0);
  const [armor, setArmor] = useState(null);
  const [gloves, setGloves] = useState(null);
  const [shoes, setShoes] = useState(null);
  const [mask, setMask] = useState(null);

  const [loading, setLoading] = useState(true);

  const onLoad = async (flag) => {
    const tempDoc = [];
    const docRef = doc(props.users, user);
    const docSnap = await getDoc(docRef);
    docSnap.data() && tempDoc.push({ id: user, ...docSnap.data() }, setData(tempDoc))
    setFlag(flag)
    setLoading(false)
  }

  const onSave = async () => {
    await setDoc(doc(props.users, user), {
      type: army,
      armor: armor,
      gloves: gloves,
      shoes: shoes,
      mask: mask,
    }, onLoad(true));
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
    !user ? history.push('/') : onLoad(false);
  }, [user])

  return (
    <>
      {
        data && data.length > 0 ? <div className='user'>
          <h2 className='title'>
            <div className='subIcon'>
              {!state ? <i className="ri-user-follow-line"></i> : <i className="ri-user-add-line"></i>}
            </div>
            <span className='subTitle'><b>신청</b>{!flag ? '하신 내역이 있습니다' : '완료 되었습니다'}</span>
          </h2>
          <div className='comment'>{!flag ? '사이즈를 변경은 재신청을 누르세요' : '수고하셨습니다'}</div>
          <div className='controll'>
            <button className='buttonLeft' onClick={() => {
              setArmor(null)
              setShoes(null)
              setGloves(null)
              setMask(null)
              setData(null)
            }}>재신청</button>
            <button className='buttonRight' onClick={() => {
              setData(null)
              setArmor(null)
              setShoes(null)
              setGloves(null)
              setMask(null)
              setArmy(null)
              setUser(null)
            }}>로그아웃</button>
          </div>
        </div> : !loading &&
        <div className='order'>
          <div>
            <div className='accordion'>
              <div className='accordionItem'>
                <h3 className={active === 0 ? 'accordionHead active' : 'accordionHead'} onClick={() => { active === 0 ? setActive(null) : setActive(0) }}><span className='accordionNum'>STEP 1</span>보호의{armor ? ' "' + armor + '" 를 선택하였습니다' : '를 선택하세요'}</h3>
                <div className={active === 0 ? 'accordionBody active' : 'accordionBody'} style={{ height: active === 0 && 48 * 7 }}>
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
                <h3 className={active === 1 ? 'accordionHead active' : 'accordionHead'} onClick={() => { active === 1 ? setActive(null) : setActive(1) }}><span className='accordionNum'>STEP 2</span>덧신{shoes ? ' "' + shoes + '" 를 선택하였습니다' : '을 선택하세요'}</h3>
                <div className={active === 1 ? 'accordionBody active' : 'accordionBody'} style={{ height: active === 1 && 48 * 2 }}>
                  <input type='radio' name='shoes' id='shoes0' value='대' onChange={({ target: { value } }) => setShoes(value)} /><label htmlFor='shoes0' className='label'><span>대</span><span>발 270mm이상</span></label>
                  <input type='radio' name='shoes' id='shoes2' value='소' onChange={({ target: { value } }) => setShoes(value)} /><label htmlFor='shoes2' className='label'><span>소</span><span>발 270mm미만</span></label>
                </div>
              </div>
              <div className='accordionItem'>
                <h3 className={active === 2 ? 'accordionHead active' : 'accordionHead'} onClick={() => { active === 2 ? setActive(null) : setActive(2) }}><span className='accordionNum'>STEP 3</span>장갑{gloves ? ' "' + gloves + '" 를 선택하였습니다' : '을 선택하세요'}</h3>
                <div className={active === 2 ? 'accordionBody active' : 'accordionBody'} style={{ height: active === 2 && 48 * 3 }}>
                  <input type='radio' name='gloves' id='gloves0' value='대' onChange={({ target: { value } }) => setGloves(value)} /><label htmlFor='gloves0' className='label'><span>대</span><span>길이 23cm이상</span></label>
                  <input type='radio' name='gloves' id='gloves1' value='중' onChange={({ target: { value } }) => setGloves(value)} /><label htmlFor='gloves1' className='label'><span>중</span><span>길이 20 - 22cm</span></label>
                  <input type='radio' name='gloves' id='gloves2' value='소' onChange={({ target: { value } }) => setGloves(value)} /><label htmlFor='gloves2' className='label'><span>소</span><span>길이 19cm이하</span></label>
                </div>
              </div>
              <div className='accordionItem'>
                <h3 className={active === 3 ? 'accordionHead active' : 'accordionHead'} onClick={() => { active === 3 ? setActive(null) : setActive(3) }}><span className='accordionNum'>STEP 4</span>방독면{mask ? ' "' + mask + '" 를 선택하였습니다' : '을 선택하세요'}</h3>
                <div className={active === 3 ? 'accordionBody active' : 'accordionBody'} style={{ height: active === 3 && 48 * 4 }}>
                  <input type='radio' name='mask' id='mask0' value='특대' onChange={({ target: { value } }) => setMask(value)} /><label htmlFor='mask0' className='label'><span>특대</span><span>XL</span></label>
                  <input type='radio' name='mask' id='mask1' value='대' onChange={({ target: { value } }) => setMask(value)} /><label htmlFor='mask1' className='label'><span>대</span><span>L</span></label>
                  <input type='radio' name='mask' id='mask2' value='중' onChange={({ target: { value } }) => setMask(value)} /><label htmlFor='mask2' className='label'><span>중</span><span>M</span></label>
                  <input type='radio' name='mask' id='mask3' value='소' onChange={({ target: { value } }) => setMask(value)} /><label htmlFor='mask3' className='label'><span>소</span><span>S</span></label>
                </div>
              </div>
            </div>
          </div>
          <div className='controll'>
            <p>{armor && shoes && gloves && mask ? '선택하신 사이즈로 신청하시겠습니까' : user + '님 사이즈에 맞게 선택해주세요'}</p>
            <button className={'button'} disabled={!armor || !shoes || !gloves || !mask} onClick={() => {
              onSave()
            }}>신청</button>
          </div>
        </div>
      }
    </>
  );
}

App.defaultProps = {
};

export default App;