// GameDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import GameData from '../GameData/GameData.json';
import Navbar from '../../components/Navbar/Navbar';
import style from './GamesDetails.module.css';

function GameDetails() {
  const { id } = useParams();
  const game = GameData.find((game) => game.id.toString() === id);

  return (
    <div className={style.GameDetailsMainPage}>

      <div className={style.GameDetailsFullPage}>
      <Navbar />
      <div className={style.GameDetailsContainer}>
      <h1>{game.gameName}</h1>
      <p>{game.gameDescription}</p>
      <img src={game.gameImage} alt={game.gameName} />
      </div>
      </div>
    </div>
  );
}

export default GameDetails;