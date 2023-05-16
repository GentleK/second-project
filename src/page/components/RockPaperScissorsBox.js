import React from 'react'
import '../styles/RockPaperScissors.css';

const RockPaperScissorsBox = (props) => {

    let boxClassName = 'box';
    if( props.result == "WIN" ){
        boxClassName = 'winBox';
    }else if( props.result == "LOSE" ){
        boxClassName = 'loseBox';
    }

    return (
        <div className={boxClassName}>
            <h3>{props.title}</h3>
            <img className='item-image' src={props.item && props.item.img}/>
            <h3>{props.result}</h3>
        </div>
    )
}

export default RockPaperScissorsBox;
