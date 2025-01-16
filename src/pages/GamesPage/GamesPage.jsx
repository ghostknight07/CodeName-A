import Navbar from "../../components/Navbar/Navbar.jsx";
import style from "./GamesPage.module.css";
import Games from "../../components/GameBox/GameBox.jsx";
import GameData from "../GameData/GameData.json";
import { useState } from "react";
import PopularGames from "../../components/PopularGames/PopularGames.jsx";
import { Link } from "react-router-dom";

function GamesPage() {
  const itemsPerPage = 3; // Number of games per page
  const totalPages = Math.ceil(GameData.length / itemsPerPage); // Total pages based on data
  const [currentPage, setCurrentPage] = useState(1);

  // Main games list for the current page
  const games = GameData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Filter popular games from GameData
  const popularGames = GameData.filter((game) => game.isPopular);

  // Handle page navigation
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={style.GamesPageMain}>
      <img
        className={style.GamesPageBackground}
        src="https://wallpapercave.com/wp/wp2196807.jpg"
        alt="Background"
      />
      <div className={style.GameFullPage}>
        <Navbar />

        <div className={style.GamesResorcesContainer}>

          <div className={style.GamePageContainer}>
            {/* Main Games List */}
            <div className={style.GameContainer}>
              {games.map((game, index) => (
                <Link to={`/games/${game.id}`} key={game.id}>
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
                </Link>
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
          </div>

          {/* Pagination */}
          <div className={style.paginationContainer}>
            {[...Array(totalPages)].map((_, pageIndex) => (
              <button
                key={pageIndex}
                className={`${style.paginationButton} ${
                  currentPage === pageIndex + 1 ? style.activePage : ""
                }`}
                onClick={() => handlePageChange(pageIndex + 1)}
              >
                {pageIndex + 1}
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default GamesPage;