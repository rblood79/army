import _ from 'lodash';
import React, { useState, useEffect } from 'react';

import { query, where, getDocs } from 'firebase/firestore';

const App = (props) => {
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
  const onLoad = async () => {
    const tempDoc = [];
    const q = query(props.user, where("type", "!=", ""));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      tempDoc.push({ id: doc.id, ...doc.data() })
    });
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

  useEffect(() => {
    onLoad();
  }, [])
  return (
    <div className='container'>
      <div className='tableContents'>
        <table className='table'>
          <thead>
            <tr>
              <th rowSpan='2'>군</th>
              <th rowSpan='2'>소속</th>
              <th colSpan='8'>보호의</th>
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
              <th>{data && _.filter(data, { 'grove': '대' }).length}</th>
              <th>{data && _.filter(data, { 'grove': '중' }).length}</th>
              <th>{data && _.filter(data, { 'grove': '소' }).length}</th>
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
  );
}

App.defaultProps = {
};

export default App;