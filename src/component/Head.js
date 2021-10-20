
import { NavLink } from "react-router-dom";
import { isMobile } from 'react-device-detect';
const App = (props) => {
  const test = () => {
    alert('시험버전에선 제공되지 않습니다')
  }
  return (
    <header className="head">
      <span className='headTitle'>국방부 화생방 보호의신청</span>
      { !isMobile &&
        <nav className='nav'>
          <NavLink className='navButton' exact to="/result"><i className="ri-pie-chart-2-fill"></i>현황</NavLink>
          <button className='navButton' onClick={test}><i className="ri-user-add-line"></i>권한</button>
          <button className='navButton' onClick={test}><i className="ri-history-line"></i>로그</button>
          <button className='navButton' onClick={test}><i className="ri-function-line"></i>메뉴</button>
          <button className='navButton' onClick={test}><i className="ri-database-2-line"></i>DB</button>
        </nav>
      }
      <span />
    </header>
  );
}
export default App;