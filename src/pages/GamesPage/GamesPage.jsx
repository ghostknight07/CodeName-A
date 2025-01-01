import Navbar from "../../components/Navbar/Navbar.jsx";
import style from "./GamesPage.module.css";
import Games from "../../components/GameBox/GameBox.jsx";
import GameData from "../GameData/GameData.json";
import { useState } from "react";

function GamesPage() {
  const [visibleCount, setVisibleCount] = useState(10);

  const handleClick = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  const games = GameData.slice(0, visibleCount);

  return (
    <div className={style.GameFullPage}>
      <Navbar />
      <div className={style.GamePageContainer}>
        <div className={style.GameContainer}>
          {games.map((game, index) => (
            <Games
              key={index}
              gameName={game.gameName}
              gameDescription={game.gameDescription}
              gameImage={game.gameImage}
              gameDate={game.gameDate}
            />
          ))}
        </div>
        <div className={style.PopularGames}>
          <h1>he</h1>
        </div>
        {visibleCount < GameData.length && (
          <div className={style.buttonContainer}>
            <button className={style.showMoreBtn} onClick={handleClick}>
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GamesPage;