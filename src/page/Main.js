
import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import context from '../component/Context';

import clo from '../assets/clo.svg';
import bio from '../assets/bio.svg';
import com from '../assets/com.svg';
import bul from '../assets/bul.svg';
const App = (props) => {
    const history = useHistory();
    const state = useContext(context);
    const { user } = state;

    useEffect(() => {
        !user && history.push('/')
    }, [])
    return (
        <div className={'mainContainer'}>
            <div className='notice'>
                <i className="ri-information-fill"></i>
                <div className='noticeText'>
                    <span>화생방 물자 신청 기간입니다</span>
                    <span className='noticeTextSub'>(21. 11. 01 ~ 11. 12 / 2주간)</span>
                </div>
            </div>
            <div className={'buttonWrap'}>
                <Link disabled className={'button'} to={'/'}><img src={clo} alt='피복류'/><span>피복류</span></Link>
                <Link className={'button'} to={'./form'}><img src={bio} alt='화생방물자'/><span>화생방물자</span></Link>
                <Link disabled className={'button'} to={'/'}><img src={com} alt='통신물자'/><span>통신물자</span></Link>
                <Link disabled className={'button'} to={'/'}><img src={bul} alt='공병물자'/><span>공병물자</span></Link>
            </div>
            <div className='mainComment'>
                <span>필요한</span><span>물자를</span> <span>선택하세요</span>
            </div>
        </div>
    );
}

App.defaultProps = {
};

export default App;