import React from 'react'

export default function ScorePage(props) {
  console.log(props.arr);
  return (
    <div>
        <h1 style={{color: 'red'}}>{props.player.lastGame}</h1>
        <p style={{color: 'red'}}>{props.player.wins} - {props.player.losses}</p> 
        <button onClick={()=>{props.startOver(props.player.name)}}>Again</button>
        <br /><br />
        <button onClick={()=>{props.nextPage(1)}}>Exit</button>
    </div>
  )
}
