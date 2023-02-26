import React from 'react'
import './table.css'

export default function ScoreTable(props) {
    let newArr;

    
    const createTable = ()=>{
        newArr = [...props.arr]
        newArr.sort((player1,player2)=>{
        if(player1.wins > player2.wins) return -1;
        if(player1.losses < player2.losses) return 1;
    })

        return(
        <table style={{position:'relative',margin:'auto'}}>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Games</th>
            </tr>
            {newArr.map((val,ind)=>{
            return(
                <tr>
                <td>{ind+1}</td>
                <td>{val.name}</td>
                <td>{val.wins}</td> 
                <td>{val.losses}</td>
                <td>{val.games}</td>
            </tr>
            )
        })}
    </table> 
        )
    }
  return (
    <div>
        <h1>Score Table</h1>
        {createTable()}
    </div>
  )
}
