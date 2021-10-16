
import { Link, NavLink } from "react-router-dom";

const App = (props) => {
    return (
      <header className="head">
        <Link className='logo' to="/">화생방보호의신청</Link>
        <nav className='nav'>
          <NavLink className='navButton' exact to="/">홈</NavLink>
          <NavLink className='navButton' to="/result">통계</NavLink>
        </nav>
      </header>
    );
  }
  export default App;