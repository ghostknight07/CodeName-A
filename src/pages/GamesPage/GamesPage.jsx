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
    <div className={style.GamesPageMain}>
      <img className={style.GamesPageBackground} src="https://wallpapercave.com/wp/wp2196807.jpg" />
      <div className={style.GameFullPage}>
        <Navbar />
        <div className={style.GamePageContainer}>
          <div className={style.GameContainer}>
            {games.map((game, index) => (
              <Games
                key={index}
                gameTitle={game.gameName}
                gameDescription={game.gameDescription}
                gameImage={game.gameImage}
                gameDate={game.gameDate}
                gameType={game.gameType}
                gameGenres={game.gameGenres}
                gameCracked={game.gameCracked}
              />
            ))}
          </div>
          <div className={style.PopularGames}>
            <h1>Popular Games</h1>
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
    </div>
  );
}

export default GamesPage;