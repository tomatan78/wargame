import './App.css';
import {useState} from 'react';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import ScorePage from './components/ScorePage';
import ScoreTable from './components/ScoreTable';



let player;
let computer;
let playersArr = [];

function App() {


  const addPlayer =(name,playerDeck)=>{
    let player = playersArr.find((val)=>{
      return val.name == name
    })
    if(player){
      player.setDeck(playerDeck)
      return player;
    }
    else{
      playersArr.push(new Player(name,playerDeck))
      return playersArr[playersArr.length-1];
    }
  }

  const [page,setPage] = useState(1);

  const showPage =()=>{

    if(page == 1){
      return <HomePage arr = {playersArr} startGame = {initGame}/>
    }
    else if(page == 2){
      return <GamePage player = {player} computer = {computer} nextPage = {setPage}/>
    }
    else if(page == 3){
      return <ScorePage startOver = {initGame} arr = {playersArr }player = {player} computer = {computer} nextPage = {setPage}/>
    }
  }

  const initGame=(name)=>{

    let playerDeck = [];
    let computerDeck = [];
    let cards = new CardsDeck()
    for (let i = 0; i < 26; i++) {
      playerDeck.push(cards.drawCard());
      computerDeck.push(cards.drawCard());
    }

      player = addPlayer(name,playerDeck)
      computer = new Player('COMPUTER',computerDeck);
    setPage(2);
  }

  return (

    <div className="App">
      {showPage()}
    </div>
  );
}

export default App;

class Player{

  games = 0;
  wins = 0;
  losses = 0;
  lastGame = '';

  constructor(name,cardsArr){
    this.name = name;
    this.cardsArr = cardsArr;
  }

  win(){
    this.games++;
    this.wins++;
  }
  lose(){
    this.games++;
    this.losses++;
  }
  setDeck(cardsArr){
    this.cardsArr = cardsArr;
  }
}

class CardsDeck{
  deck = [];

  constructor(){
    this.initDeck()
  }
  initDeck(){
    for(let i = 1; i<14; i++){
      for (let j = 1; j < 5; j++) {
        this.deck.push(i)
      }
    }
  }

  drawCard(){
    let rand = Math.floor(Math.random()*this.deck.length);
    let card = this.deck.splice(rand,1);
    return card[0];
  }
}
