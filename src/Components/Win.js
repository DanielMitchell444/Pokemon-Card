import React from "react";
import styles from '../App.module.css'
import Easy from "./Easy";
import Cards from "./Cards";
import GameBoard from "./GameBoard";

const Win = ({setClick, e, handleExit, count, playAgain, win, onClick, data, option, clicked, open, onClick4, exit, currentScore, restartGame, play, difficultyLevel}) => {
 return( 
 <div className= {styles.modal}>
    <div className= {styles.modalContent}>
    {currentScore === 5 ? <h1>You win</h1> : <h1>You lose</h1>}
    {currentScore === 5 ? <img src="https://media2.giphy.com/media/xx0JzzsBXzcMK542tx/giphy.gif" class= {styles.img} alt=""></img> :
    <img src="https://media.tenor.com/TRTMIXMvMlAAAAAC/ditto-sad.gif" class="status-gif" alt=""></img>
    }
   <div className= {styles.score}>
    <span className= {styles.finalScore}>
     Your final score is {currentScore} 
    </span>
    <div className= {styles.options}>
     <button 
     className= {styles.optionsButton}
     onClick = {restartGame}
     value = {"restart"}
     >Play Again</button>
     <button
     className= {styles.optionsButton}
     >
     Continue Playing
     </button>
     <button className= {styles.optionsButton}
     onClick={handleExit}
     value = {"Exit"}
     >Exit</button>

    </div>
   </div>
   </div>

 </div>
 )
 }

export default Win;