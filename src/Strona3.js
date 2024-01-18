import React, { useState, useEffect } from 'react';

const Strona3 = () => {
  const [boxColor, setBoxColor] = useState('red');
  const [startTime, setStartTime] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [reactionTime, setReactionTime] = useState(null);

  const startGame = () => {
    setGameStarted(true);
    setReactionTime(null);

    const randomTime = Math.floor(Math.random() * 5000) + 1000; 
    setTimeout(() => {
      setBoxColor('green');
      setStartTime(Date.now());
    }, randomTime);
  };

  const handleBoxClick = () => {
    if (gameStarted) {
      if (boxColor === 'green') {
        const currentReactionTime = Date.now() - startTime;
        setReactionTime(currentReactionTime);
        setBoxColor('red');
        setStartTime(null);
        setGameStarted(false);
      } else {
        alert('Poczekaj, aż pole zmieni kolor na zielony!');
      }
    }
  };

  return (
    <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: boxColor,
          cursor: 'pointer',
          margin: '20px auto',
        }}
        onClick={handleBoxClick}
      ></div>
      <button onClick={startGame} disabled={gameStarted}>
        Rozpocznij gre
      </button>
      {reactionTime !== null && (
        <p style={{ marginTop: '10px' }}>
          Twój czas reakcji to: {reactionTime} Milisekundy
        </p>
      )}
    </div>
  );
};

export default Strona3;

