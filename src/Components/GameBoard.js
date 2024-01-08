import React, { useState } from "react";
import Header from '../Components/Header'
import styles from '../App.module.css'
import Cards from "./Cards";
import Score from "./Score";
import Win from "./Win";
import GameOver from "./GameOver";
import LoadingScreen from "./loadingScreen";
import Start from "./Start";
const GameBoard = ({pokemonData, options, values,  click, isThisClicked,matchCards, isOpen, win, count, onClick, data, setClick, cardShowing, open, exit, handleExit, difficultyLevel, seed, reset, play, secondPlay, currentScore, bestScore, game, playAgain, restartGame, game2}) => {
    
    const [results, setResults] = useState('')




 return (

<>
 <Header 
 />
 {difficultyLevel === "Easy" &&
 <Score
  currentScore={currentScore}
  difficultyLevel = {difficultyLevel}
  bestScore={5}
 />
}


{difficultyLevel === "Medium" &&
  <Score
 currentScore={currentScore}
 difficultyLevel={difficultyLevel}
 bestScore={7}
 />
}
{difficultyLevel === "Hard" && difficultyLevel !== "Easy" && difficultyLevel !== "Medium" &&
<Score 
currentScore={currentScore}
difficultyLevel={difficultyLevel}
bestScore={10}
/>

}








<div className= {styles.container}>
<div className= {styles.cards}>
  {currentScore !== 5  && difficultyLevel === "Easy" &&
  data && data.map(pokemon => {
   return <Cards
   image = {pokemon.sprites.front_default}
   name = {pokemon.name}
   value = {pokemon.name}
   onClick={onClick}
   cardShowing = {cardShowing}
   />
  })
  
  }

  {currentScore === 0 && difficultyLevel === "Easy" &&
   data && data.map(pokemon => {
    return <Cards
     image = {pokemon.sprites.front_default}
     name = {pokemon.name}
     value = {pokemon.name}
     onClick={onClick}
    />
   })
   
  }

  {currentScore === 0 && difficultyLevel === "Medium" &&
  data && data.map(pokemon => {
   return <Cards
 image={pokemon.sprites.front_default}
 name = {pokemon.name}
 onClick={onClick}
   />
  })
  }
  


<div className= {styles.container}>
<div className= {styles.cards}>
  {currentScore !== 7 && difficultyLevel === "Medium" &&
  data && data.map(pokemon => {
   return <Cards
   image = {pokemon.sprites.front_default}
   name = {pokemon.name}
   value = {pokemon.name}
   onClick={onClick}
   cardShowing = {cardShowing}
   />
  })
  
  }

<div className= {styles.container}>
<div className= {styles.cards}>
  {currentScore !== 10 && difficultyLevel === "Hard" && 
  data && data.map(pokemon => {
    return <Cards
   image = {pokemon.sprites.front_default}
   name = {pokemon.name}
   value = {pokemon.name}
   onClick={onClick}
   />
  })
  
  }

  




 

 

 

 {currentScore == 5 && difficultyLevel === "Easy"  &&
 <Win
 count = {count}
 onClick = {setClick}
 open = {open}
 exit = {exit}
 handleExit = {handleExit}
 secondPlay = {secondPlay}
 restartGame = {restartGame}
 difficultyLevel = {difficultyLevel}
 setClick = {setClick}
 currentScore = {currentScore}
 restart = {game2}
 seed = {seed}
 reset = {reset}
 />


}

{currentScore === 7 && difficultyLevel === "Medium" &&

<Win
 count = {count}
 onClick = {setClick}
 open = {open}
 exit = {exit}
 handleExit = {handleExit}
 secondPlay = {secondPlay}
 restartGame = {restartGame}
 difficultyLevel = {difficultyLevel}
 setClick = {setClick}
 currentScore = {currentScore}
 restart = {game2}
 seed = {seed}
 reset = {reset}
 />

}

{currentScore === 10 && difficultyLevel === "Hard" &&
<Win
 count = {count}
 onClick = {setClick}
 open = {open}
 exit = {exit}
 handleExit = {handleExit}
 secondPlay = {secondPlay}
 restartGame = {restartGame}
 difficultyLevel = {difficultyLevel}
 setClick = {setClick}
 currentScore = {currentScore}
 restart = {game2}
 seed = {seed}
 reset = {reset}
 />

}


{win === false && difficultyLevel === "Easy" &&
<Win
count = {count}
onClick={setClick}
open = {open}
exit = {exit}
handleExit={handleExit}
secondPlay = {secondPlay}
restartGame={restartGame}
difficultyLevel={difficultyLevel}
setClick={setClick}
currentScore={currentScore}
restart = {game2}
reset = {reset}


/>

}

{win === false && difficultyLevel === "Medium" &&
<Win
count = {count}
onClick={setClick}
open = {open}
exit = {exit}
handleExit={handleExit}
secondPlay = {secondPlay}
restartGame={restartGame}
difficultyLevel={difficultyLevel}
setClick={setClick}
currentScore={currentScore}
restart = {game2}
reset = {reset}


/>


}

<div className= {styles.container}>
<div className= {styles.cards}>
  {values === "restart" && 
   <div>
   { data && data.map((pokemon) => <Cards image = {pokemon.sprites.front_default} name = {pokemon.name} />)

   }
    </div>
}
{win === false && difficultyLevel === "Hard" && 
<GameOver
count = {count}
onClick={setClick}
open = {open}
exit = {exit}
handleExit={handleExit}
secondPlay = {secondPlay}
restartGame={restartGame}
difficultyLevel={difficultyLevel}
setClick={setClick}
currentScore={currentScore}
restart = {game2}
reset = {reset}


/>


}




</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</>
 )
}

export default GameBoard