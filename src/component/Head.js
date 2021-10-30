
import React, { useContext } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import context from './Context';
const App = (props) => {
  const state = useContext(context);
  const history = useHistory();
  const { user } = state;
  const test = () => {
    alert('시험버전에선 제공되지 않습니다')
  }
  const back = () => {
    history.push('/main')
  }
  return (
    <header className="head">
      <nav className='nav sub'>
        {props.path === '/main' ? <div className='headTitle'>군 소요물자 신청</div> : user === 'admin' ? <div className='headTitle'>군 소요물자 신청관리</div> : <button className='navButton' onClick={back}><i className="ri-arrow-left-s-line"></i></button>}
        {props.path !== '/main' ? user === 'admin' ? 
        <div className='navRes'>
          <NavLink className='navButton' exact to="/result"><i className="ri-pie-chart-2-fill"></i>현황</NavLink>
          <button className='navButton' onClick={test}><i className="ri-user-add-line"></i>권한</button>
          <button className='navButton' onClick={test}><i className="ri-history-line"></i>로그</button>
          <button className='navButton' onClick={test}><i className="ri-function-line"></i>메뉴</button>
          <button className='navButton' onClick={test}><i className="ri-database-2-line"></i>DB</button>
        </div>
        : <span>화생방 물자</span> : null}
        {isMobile ? <button className='navButton menu' onClick={test}><i className="ri-menu-line"></i></button> : <span className={'spaceButton'} style={{width: user === 'admin' ? '160px' : '48px'}}/>}
      </nav>
    </header>
  );
}
export default App;