// GameDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import GameData from '../GameData/GameData.json';

function GameDetails() {
  const { id } = useParams();
  const game = GameData.find((game) => game.id.toString() === id);

  return (
    <div>
      <h1>{game.gameName}</h1>
      <p>{game.gameDescription}</p>
      <img src={game.gameImage} alt={game.gameName} />
    </div>
  );
}

export default GameDetails;