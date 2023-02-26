import React,{useState} from 'react'
import Card from './Card'
import './gamepage.css'


        let playerPoint = 0;
        let computerPoints = 0;

export default function GamePage(props) {
    const[index,setIndex] = useState(0);


    if(props.computer.cardsArr[index] > props.player.cardsArr[index]){
        computerPoints++;
    }
    else if(props.computer.cardsArr[index] < props.player.cardsArr[index])
        playerPoint++;


        const nextCard=()=>{
            if(index == 25){
                if(playerPoint>computerPoints){
                    props.player.win();
                    props.player.lastGame = 'win';
                }
                else if(playerPoint < computerPoints){
                    props.player.lose();
                    props.player.lastGame = 'lose'
                }
                else{
                    props.player.games++;
                    props.player.lastGame = 'tie'
                }
                playerPoint = 0;
                computerPoints = 0;
                props.nextPage(3);
            }
            console.log(playerPoint,computerPoints);
        setIndex(index+1)
    }
  return (
    <div>
        <h1>Computer</h1>
        <p>Round number: {index+1}</p>
        <div className='board'>
            <p>Computer points: {computerPoints}</p>
            <Card num = {props.computer.cardsArr[index]}/>
            <Card num = {props.player.cardsArr[index]}/>
            <p>{props.player.name} points: {playerPoint}</p>
        </div>
        <h1>{props.player.name}</h1>
        <button onClick={nextCard}>Next</button>
    </div>
  )
}

