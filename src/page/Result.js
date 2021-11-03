import _ from 'lodash';
import 'remixicon/fonts/remixicon.css'
import React, { useState, useEffect, useContext } from 'react';
import context from '../component/Context';
import { useHistory } from "react-router-dom";
//import { isMobile } from 'react-device-detect';

import { query, where, getDocs } from 'firebase/firestore';
const App = (props) => {
  const history = useHistory();
  const state = useContext(context);
  const { user } = state;
  const [data, setData] = useState(null);
  const [result, setResult] = useState({});
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
      tempDoc.push({ id: doc.id, ...doc.data(), ..._.find(memberDoc, ['id', doc.id]) })
    });

    const testDoc = [];
    memberSnapshot.forEach((doc) => {
      //console.log(_.find(tempDoc, ['id', doc.id]))
      testDoc.push({ id: doc.id, ...doc.data(), ..._.find(tempDoc, ['id', doc.id]) })
    });
    setData(testDoc);

    const _group = groupBy(tempDoc, 'group');
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

    //console.log(tempObj)
    /*const mergeObj = _.merge({}, result, tempObj);
    setResult(mergeObj);
    setData(tempDoc);*/
    setResult(tempObj);

  }

  useEffect(() => {
    user !== 'admin' ? history.push('/') : onLoad();
  }, [])
  return (
    <div className='resultContainer'>
      {
        result &&
        <div className='total'>
          <div className='resultHead'>
            <h2 className='title'>종합소요 현황 - 화생방 물자</h2>
            <div className='buttonGroup'>
              <button onClick={onLoad}><i className="ri-refresh-line"></i>재조회</button>
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
                  <th rowSpan='2'>군</th>
                  <th colSpan='4'>소속</th>
                  <th colSpan='8'>보호의</th>
                  <th colSpan='3'>덧신</th>
                  <th colSpan='4'>장갑</th>
                  <th colSpan='5'>방독면</th>
                </tr>
                <tr>
                  <th>부대</th>
                  <th>대대</th>
                  <th>중대</th>
                  <th>반</th>
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
                    const test = [item[0] !== 'undefined' ? item[0] : <i className="ri-close-line" />];

                    Object.entries(item[1]).map((item) => {
                      test.splice(0, 0, item[0] !== 'undefined' ? item[0] : <i className="ri-close-line" />)
                      return (
                        <>
                          {
                            Object.entries(item[1]).map((item) => {
                              test.splice(0, 0, item[0] !== 'undefined' ? item[0] : <i className="ri-close-line" />)
                              return (
                                <>
                                  {
                                    Object.entries(item[1]).map((item) => {
                                      test.splice(0, 0, item[0] !== 'undefined' ? item[0] : <i className="ri-close-line" />)
                                      return (
                                        <>
                                          {
                                            Object.entries(item[1]).map((item) => {
                                              test.splice(0, 0, item[0] !== 'undefined' ? item[0] : <i className="ri-close-line" />)
                                              return (
                                                <>
                                                  {
                                                    Object.entries(item[1]).map((item) => {
                                                      Object.entries(item[1]).map((item, i) => {
                                                        test.push(item[0] === '소계' ? item[1] : item[1].length > 0 ? item[1].length : null)
                                                      })
                                                    })
                                                  }
                                                </>
                                              )
                                            })
                                          }
                                        </>
                                      )
                                    })
                                  }
                                </>
                              )
                            })
                          }
                        </>
                      )
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
                  <th>{data && _.filter(data, { 'armor': '특1호' }).length}</th>
                  <th>{data && _.filter(data, { 'armor': '1호' }).length}</th>
                  <th>{data && _.filter(data, { 'armor': '2호' }).length}</th>
                  <th>{data && _.filter(data, { 'armor': '3호' }).length}</th>
                  <th>{data && _.filter(data, { 'armor': '4호' }).length}</th>
                  <th>{data && _.filter(data, { 'armor': '5호' }).length}</th>
                  <th>{data && _.filter(data, { 'armor': '6호' }).length}</th>
                  <th>{data && data.length}</th>
                  <th>{data && _.filter(data, { 'shoes': '대' }).length}</th>
                  <th>{data && _.filter(data, { 'shoes': '소' }).length}</th>
                  <th>{data && data.length}</th>
                  <th>{data && _.filter(data, { 'gloves': '대' }).length}</th>
                  <th>{data && _.filter(data, { 'gloves': '중' }).length}</th>
                  <th>{data && _.filter(data, { 'gloves': '소' }).length}</th>
                  <th>{data && data.length}</th>
                  <th>{data && _.filter(data, { 'mask': '특대' }).length}</th>
                  <th>{data && _.filter(data, { 'mask': '대' }).length}</th>
                  <th>{data && _.filter(data, { 'mask': '중' }).length}</th>
                  <th>{data && _.filter(data, { 'mask': '소' }).length}</th>
                  <th>{data && data.length}</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

      }

      <div className='users'>
        <div className='resultHead'>
          <h2 className='title'>신청자 현황</h2>
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
                  <th>반</th>
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
                  Object.entries(data).map((item, index) =>
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
                      <td>{item[1].armor ? <i className="ri-checkbox-circle-line" /> : <i className="ri-checkbox-blank-circle-line" ></i>}</td>
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