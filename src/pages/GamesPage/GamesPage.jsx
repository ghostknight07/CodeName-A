import Navbar from "../../components/Navbar/Navbar.jsx";
import style from "./GamesPage.module.css";
import Games from "../../components/GameBox/GameBox.jsx";
import GameData from "../GameData/GameData.json";
import { useState } from "react";
import PopularGames from "../../components/PopularGames/PopularGames.jsx";

function GamesPage() {
  const [visibleCount, setVisibleCount] = useState(10);

  // Load more games when "Show More" is clicked
  const handleClick = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  // Main games list to display
  const games = GameData.slice(0, visibleCount);

  // Filter popular games from GameData
  const popularGames = GameData.filter((game) => game.isPopular);

  return (
    <div className={style.GamesPageMain}>
         
      <img
        className={style.GamesPageBackground}
        src="https://wallpapercave.com/wp/wp2196807.jpg"
        alt="Background"
      />
      <div className={style.GameFullPage}>
        <Navbar />

        <div className={style.GamePageContainer}>
          {/* Main Games List */}
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

          {/* Popular Games Section */}
          <div className={style.PopularGames}>
            <h1 className={style.PopularGamesHeader}>Popular Games</h1>
            <br />
            <div className={style.PopularGamesContainer}>
              {popularGames.map((game, index) => (
                <PopularGames
                  key={index}
                  gameTitle={game.gameName}
                  gameImage={game.gameImage}
                  gameDate={game.gameDate}
                  gameType={game.gameType}
                  gameCracked={game.gameCracked}
                />
              ))}
            </div>
          </div>

          {/* Show More Button */}
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
