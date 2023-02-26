import React,{useState} from 'react';
import ScoreTable from './ScoreTable';
import './homePage.css'

export default function HomePage(props) {
    const[name,setName] = useState('');
    const[showTable,setShowTable] = useState(true);
    const[error,setError] = useState('');

    const checkName=()=>{
        if (name == '') {
            setError('Please enter a name!')
            return
        }
        props.startGame(name);
    }
    const presentTable =()=>{
        if (showTable) {
            return <ScoreTable arr = {props.arr}/>
        }
        else{
            return
        }
    }

  return (
    <div>
        <div className='mainDiv'>
        <h1>Welcome to card war game!</h1>
        <input onChange={(e)=>{setError(''); setName(e.target.value)}} type="text" placeholder='Enter Your name'/>
        <p>{error}</p>
        <br /><br />
        <button onClick={()=>{checkName(); props.startGame(name)}}>Start Game</button>
        <br /><br />
        <button onClick={()=>{setShowTable(!showTable)}}>Show Table</button>
        {presentTable()}
        </div>
    </div>
  )
}
