import React from 'react'
import './styles/RockPaperScissors.css';
import { useNavigate } from 'react-router-dom'
import RockPaperScissorsBox from './components/RockPaperScissorsBox';
import { useState } from 'react';

const RockPaperScissors = () => {
    const navigatePage = useNavigate();
    const goToHomepage = ()=>{
        navigatePage('/');
    }

    const choice = {
        rock:{
            name : "Rock",
            img : "data:image/jpeg;base64,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"
        },
        paper:{
            name : "Paper",
            img : "data:image/png;base64,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"
        },
        scissors:{
            name : "Scissors",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSn-jY7gC0Xl4OiMU7Jn63bok-3Wcj_hUZYg&usqp=CAU"
        }
    }

    const [ userSelect, setUserSelect ] = useState(null);
    const [ computerSelect, setComputerSelect ] = useState(null);
    const [ userResult, setUserResult ] = useState("");
    const [ computerResult, setComputerResult ] = useState("");

    const play = (userChoice)=>{
        setUserSelect(choice[userChoice]);
        let computerChoice = randomChoice();
        setComputerSelect(choice[computerChoice]);
        judgement(userChoice, computerChoice);
    }

    const randomChoice = ()=>{
        let itemArray = Object.keys(choice);            //객체의 키값을 배열로 반환..
        let randomItem = Math.floor(Math.random() * itemArray.length);
        return itemArray[randomItem];
    }

    const judgement = (userChoice, computerChoice)=>{
        if( userChoice == computerChoice ){
            setUserResult("TIE");
            setComputerResult("TIE");
        }else if( 
            ( "rock" == userChoice && "scissors" == computerChoice ) ||
            ( "paper" == userChoice && "rock" == computerChoice ) ||
            ( "scissors" == userChoice && "paper" == computerChoice )
            ){
                setUserResult("WIN");
                setComputerResult("LOSE");
        }else{
            setUserResult("LOSE");
            setComputerResult("WIN");
        }
    }

    return (
        <div>
            <div className='titleBoxDiv'>
                <h1>가위 바위 보</h1>
                <button onClick={goToHomepage} className="homeButton">Go Home</button>
            </div>
            <div>
                <div className='main'>
                    <RockPaperScissorsBox title='You' item={userSelect} result={userResult}/>
                    <RockPaperScissorsBox title='Computer' item={computerSelect} result={computerResult} />
                </div>
                <div className='main'>
                    <button className='game-button' onClick={()=>play("scissors")}><img className='button-image' src={choice.scissors.img} /></button>
                    <button className='game-button' onClick={()=>play("rock")}><img className='button-image' src={choice.rock.img} /></button>
                    <button className='game-button' onClick={()=>play("paper")}><img className='button-image' src={choice.paper.img} /></button>
                </div>
            </div>
        </div>
    )
}

export default RockPaperScissors
