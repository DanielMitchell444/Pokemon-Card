import styles from '../App.module.css'
import Header from './Header';
export default function Score({ currentScore, bestScore, option, isOpen, difficultyLevel }) {
    return (
      <div className= {styles.stats}>
        <p className="current-score">
          Score: <b>{currentScore}</b>
        </p>
        <p className="best-score">
          High Score:{bestScore}
          {option === "Easy" &&
          <p className= {styles.scoreProgress}>
            {currentScore} / 5
          </p>
}

        </p>
        </div>
    );
  }