import React, { useState, useEffect } from 'react';
import './App.css';

const Strona2 = () => {
  const [score, setScore] = useState(0);
  const [ballPosition, setBallPosition] = useState({ top: 50, left: 50 });
  const [ballSpeed, setBallSpeed] = useState(2000);

  useEffect(() => {
    const handleBallClick = (event) => {
      const ball = document.querySelector('.ball');
      const clickedInsideBall = ball.contains(event.target);

      if (clickedInsideBall) {
        setScore(score + 1);
        setBallPosition({
          top: Math.random() * 80 + 10,
          left: Math.random() * 80 + 10,
        });
      }
    };

    const gameInterval = setInterval(() => {
      setBallPosition({
        top: Math.random() * 80 + 10,
        left: Math.random() * 80 + 10,
      });
    }, ballSpeed);

    document.addEventListener('click', handleBallClick);

    return () => {
      clearInterval(gameInterval);
      document.removeEventListener('click', handleBallClick);
    };
  }, [score, ballSpeed]);

  useEffect(() => {
    if (score > 0 && score % 10 === 0) {
      setBallSpeed((prevSpeed) => prevSpeed * 0.7);
    }
  }, [score]);

  return (
    <div className="App">
      <h1>Kliknij piłke</h1>
      <p>Wynik: {score}</p>
      <div className="game-container">
        <div
          className="ball"
          style={{
            top: `${ballPosition.top}%`,
            left: `${ballPosition.left}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Strona2;
