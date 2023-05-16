import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigatePage = useNavigate();

    const goSubMenu = (pageName)=>{
        navigatePage('/' + pageName);
    }

    return (
        <div>
            <h1>Homepage</h1>
            <button onClick={() => goSubMenu('RockPaperScissors')}>가위 바위 보</button>
            <button onClick={() => goSubMenu('Weather')}>날씨</button>
            <button onClick={() => goSubMenu('HMShopingMall')}>H&M 쇼핑몰</button>
        </div>
    )
}

export default Homepage
