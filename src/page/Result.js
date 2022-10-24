/* eslint-disable array-callback-return */
import _ from 'lodash';
import 'remixicon/fonts/remixicon.css'
import React, { useState, useEffect, useContext } from 'react';
import context from '../component/Context';
import { useHistory } from "react-router-dom";
import { isMobile } from 'react-device-detect';

import { doc, setDoc, query, where, getDocs, deleteDoc } from 'firebase/firestore';
const App = (props) => {
  const history = useHistory();
  const state = useContext(context);
  const { user } = state;
  const [total, setTotal] = useState(null);
  const [data, setData] = useState(null);
  const [result, setResult] = useState({});
  //
  const [type, setType] = useState(null);
  const [unit, setUnit] = useState(null);
  const [corps, setCorps] = useState(null);
  const [company, setCompany] = useState(null);
  const [group, setGroup] = useState(null);
  const [number, setNumber] = useState(null);

  const save = async () => {
    await setDoc(doc(props.member, number), {
      type: type,
      unit: unit,
      corps: corps,
      company: company,
      group: group,
    }, onLoad());
  }

  const test = () => {
    alert('시험버전에선 제공되지 않습니다')
  }
  const groupBy = (data, key, sum) => {
    const armorDef = {
      '특1호': [],
      '1호': [],
      '2호': [],
      '3호': [],
      '4호': [],
      '5호': [],
      '6호': [],
    }
    const shoesDef = {
      '대': [],
      '소': [],
    }
    const glovesDef = {
      '대': [],
      '중': [],
      '소': [],
    }
    const maskDef = {
      '특대': [],
      '대': [],
      '중': [],
      '소': [],
    }
    return data.reduce(function (carry, el) {
      var group = el[key];
      if (carry[group] === undefined) {
        carry[group] = []
      }
      carry[group].push(el);
      if (sum) {
        carry['소계'] = [data.length];
        const mergeCarry = _.merge({}, key === 'armor' ? armorDef : key === 'shoes' ? shoesDef : key === 'gloves' ? glovesDef : key === 'mask' ? maskDef : null, carry);
        return mergeCarry
      } else {
        return carry
      }
    }, {})
  }
  const clear = async () => {
    const q = query(props.users);
    const m = query(props.member);
    const querySnapshot = await getDocs(q);
    const querySnapshot2 = await getDocs(m);
    querySnapshot.forEach((doc) => {
      deleteItem(props.users, doc.id)
    });
    querySnapshot2.forEach((doc) => {
      deleteItem(props.member, doc.id)
    });
    onLoad();
  }

  const deleteItem = async (pp, nameId) => {
    const docRef = doc(pp, nameId);
    deleteDoc(docRef)
  }

  const onLoad = async () => {
    const memberDoc = [];
    const m = query(props.member, where("type", "!=", ""));
    const memberSnapshot = await getDocs(m);
    memberSnapshot.forEach((doc) => {
      memberDoc.push({ id: doc.id, ...doc.data() })
    });

    const tempDoc = [];
    const q = query(props.users, where("type", "!=", ""));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const aa = _.find(memberDoc, ['id', doc.id])
      const xx = aa ? aa.type + aa.unit + aa.corps + aa.company + ',' + aa.group : doc.data().type + '-';
      tempDoc.push({ id: doc.id, ...doc.data(), ...aa, test: xx })
    });
    setTotal(tempDoc);

    const testDoc = [];
    memberSnapshot.forEach((doc) => {
      testDoc.push({ id: doc.id, ...doc.data(), ..._.find(tempDoc, ['id', doc.id]) })
    });
    setData(testDoc);

    //console.log(_.filter(memberDoc, ['group', 'C-3반']))

    const _group = groupBy(tempDoc, 'test');
    const tempObj = {}
    _.map(_group, (item, key) => {
      const _itemP = tempObj[key] = {}

      const _company = groupBy(item, 'company');
      _.map(_company, (item, key) => {
        const _itemY = _itemP[key] = {}

        const _corps = groupBy(item, 'corps');
        _.map(_corps, (item, key) => {
          const _itemS = _itemY[key] = {}

          const _unit = groupBy(item, 'unit');
          _.map(_unit, (item, key) => {
            const _itemT = _itemS[key] = {}

            const _type = groupBy(item, 'type');
            _.map(_type, (item, key) => {
              const _item = _itemT[key] = {}

              _item.armor = groupBy(item, 'armor', true)
              _item.shoes = groupBy(item, 'shoes', true)
              _item.gloves = groupBy(item, 'gloves', true)
              _item.mask = groupBy(item, 'mask', true)

            });
          });
        });
      });
    });

    setResult(tempObj);
  }

  useEffect(() => {
    user !== 'admin' ? history.push('/') : onLoad();
  }, [])
  return (
    <div className='resultContainer'>
      <div className='addUser' style={{ display: !isMobile && 'flex' }}>
        <div className='select'>
          <input type='radio' name='type' id='type0' value='육군' onChange={({ target: { value } }) => setType(value)} /><label htmlFor='type0' >육군</label>
          <input type='radio' name='type' id='type1' value='공군' onChange={({ target: { value } }) => setType(value)} /><label htmlFor='type1' >공군</label>
          <input type='radio' name='type' id='type2' value='해군' onChange={({ target: { value } }) => setType(value)} /><label htmlFor='type2' >해군</label>
        </div>
        <input type='text' onChange={({ target: { value } }) => { setUnit(value) }} placeholder='부대' />
        <input type='text' onChange={({ target: { value } }) => { setCorps(value) }} placeholder='대대' />
        <input type='text' onChange={({ target: { value } }) => { setCompany(value) }} placeholder='중대' />
        <input type='text' onChange={({ target: { value } }) => { setGroup(value) }} placeholder='소대' />
        <input type='text' minLength={6} maxLength={12} onChange={({ target: { value } }) => { setNumber(value) }} placeholder='군번' />
        <button onClick={save}>등록</button>
      </div>
      {
        result &&
        <div className='total'>
          <div className='resultHead'>
            <h2 className='title'>종합소요 현황 <span className='titleSub'>- 화생방 물자</span></h2>
            <div className='buttonGroup'>
              <button onClick={onLoad}><i className="ri-refresh-line"></i>재조회</button>
              <button onClick={() => {
                window.confirm('데이터를 삭제 합니다 삭제시 복구 할수 없습니다. 다시 한번 확인하세요.') && clear();
              }}><i className="ri-delete-bin-2-line"></i>초기화</button>

              <div className='wrap'>
                <button disabled onClick={test}><i className="ri-folder-upload-line"></i>소요현황 업로드</button>
                <button disabled onClick={test}><i className="ri-folder-download-line"></i>부대별 현황 다운로드</button>
                <button disabled onClick={test}><i className="ri-printer-line"></i>인쇄</button>
              </div>
            </div>
          </div>
          <div className='tableContents'>
            <table className='table'>
              <thead>
                <tr>
                  <th colSpan='5'>소속</th>
                  <th colSpan='8'>보호의</th>
                  <th colSpan='3'>덧신</th>
                  <th colSpan='4'>장갑</th>
                  <th colSpan='5'>방독면</th>
                </tr>
                <tr className='subHead'>
                  <th>군</th>
                  <th>부대</th>
                  <th>대대</th>
                  <th>중대</th>
                  <th>소대(반)</th>
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
                  Object.entries(result).map((item) => {
                    const test = [item[0] !== 'undefined' && item[0].split(',')[1]];
                    Object.entries(item[1]).map((item) => {
                      test.splice(0, 0, item[0] !== 'undefined' && item[0])
                      Object.entries(item[1]).map((item) => {
                        test.splice(0, 0, item[0] !== 'undefined' && item[0])
                        Object.entries(item[1]).map((item) => {
                          test.splice(0, 0, item[0] !== 'undefined' && item[0])
                          Object.entries(item[1]).map((item) => {
                            test.splice(0, 0, item[0] !== 'undefined' && item[0])
                            Object.entries(item[1]).map((item) =>
                              Object.entries(item[1]).map((item, i) =>
                                test.push(item[0] === '소계' ? item[1] : item[1].length > 0 ? item[1].length : null)
                              )
                            )
                          })
                        })
                      })
                    })
                    return (
                      <tr key={item[0] + item[1]}>
                        {
                          Object.entries(test).map((item) => {
                            return (
                              <td key={item[0] + item[1]}>{item[1]}</td>
                            )
                          })
                        }
                      </tr>
                    )
                  })
                }
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan='5'>계</th>
                  <th>{total && _.filter(total, { 'armor': '특1호' }).length}</th>
                  <th>{total && _.filter(total, { 'armor': '1호' }).length}</th>
                  <th>{total && _.filter(total, { 'armor': '2호' }).length}</th>
                  <th>{total && _.filter(total, { 'armor': '3호' }).length}</th>
                  <th>{total && _.filter(total, { 'armor': '4호' }).length}</th>
                  <th>{total && _.filter(total, { 'armor': '5호' }).length}</th>
                  <th>{total && _.filter(total, { 'armor': '6호' }).length}</th>
                  <th className='sum'>{total && total.length}</th>
                  <th>{total && _.filter(total, { 'shoes': '대' }).length}</th>
                  <th>{total && _.filter(total, { 'shoes': '소' }).length}</th>
                  <th className='sum'>{total && total.length}</th>
                  <th>{total && _.filter(total, { 'gloves': '대' }).length}</th>
                  <th>{total && _.filter(total, { 'gloves': '중' }).length}</th>
                  <th>{total && _.filter(total, { 'gloves': '소' }).length}</th>
                  <th className='sum'>{total && total.length}</th>
                  <th>{total && _.filter(total, { 'mask': '특대' }).length}</th>
                  <th>{total && _.filter(total, { 'mask': '대' }).length}</th>
                  <th>{total && _.filter(total, { 'mask': '중' }).length}</th>
                  <th>{total && _.filter(total, { 'mask': '소' }).length}</th>
                  <th className='sum'>{total && total.length}</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <span className='tableComment'>등록되지않은 신청자포함</span>
        </div>

      }

      <div className='users'>
        <div className='resultHead'>
          <h2 className='title'>신청자 현황<span className='titleSub'>- 전체 {data && data.length}명 중 {data && _.filter(data, 'armor').length}명 신청</span></h2>
          <div className='buttonGroup' style={{ display: 'none' }}>
            <div className='wrap'>
              <button disabled onClick={test}><i className="ri-user-voice-line"></i>미신청자 자동안내</button>
              <button disabled onClick={test}><i className="ri-user-search-line"></i>미신청현황 다운로드</button>
              <button disabled onClick={test}><i className="ri-shield-check-line"></i>부대별 과부족소요확인</button>
              <button disabled onClick={test}><i className="ri-file-shield-2-line"></i>부대별 소요이관</button>
            </div>
          </div>
        </div>
        <div>

          <div className='tableContents'>
            <table className='table'>
              <thead>
                <tr>
                  <th>군</th>
                  <th>부대</th>
                  <th>대대</th>
                  <th>중대</th>
                  <th>소대(반)</th>
                  <th>군번</th>
                  <th>보호의</th>
                  <th>덧신</th>
                  <th>장갑</th>
                  <th>방독면</th>
                  <th>신청유무</th>
                </tr>
              </thead>
              <tbody>
                {
                  data &&
                  Object.entries(data).map((item) =>
                    <tr key={item[0] + item[1]}>
                      <td>{item[1].type}</td>
                      <td>{item[1].unit}</td>
                      <td>{item[1].corps}</td>
                      <td>{item[1].company}</td>
                      <td>{item[1].group}</td>
                      <td>{item[1].id}</td>
                      <td>{item[1].armor}</td>
                      <td>{item[1].shoes}</td>
                      <td>{item[1].gloves}</td>
                      <td>{item[1].mask}</td>
                      <td>{item[1].armor ? <i className="ri-checkbox-circle-line" /> : <i className="ri-close-line" ></i>}</td>
                    </tr>
                  )
                }
              </tbody>
              <tfoot>

              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

App.defaultProps = {
};

export default App;