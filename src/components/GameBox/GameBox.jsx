import style from "./GameBox.module.css";
import { FaClock } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Game({
  gameTitle,
  gameDescription,
  gameImage,
  gameDate,
  gameType,
  gameGenres,
  gameCracked,
}) {
  return (
    <div className={style.gameBoxContainer}> {/* full page  */}
      <div className={style.gameImageContainer}>{/* for image */}
        <img src={gameImage} alt={gameTitle} />
      </div>
      <div className={style.gameInfo}>{/* FOR Full info */}
        {/* for link every word */}
        <div className={style.gameTypeContainer}>{/* for game type */}
          <a href="#">
            <h3 className={style.gameType}>{gameType}</h3>
          </a>
        </div>

        <a href="#">
          <h2 className={style.gameTitle}>{gameTitle}</h2>
        </a>
        <br />

        <a href="#">
          <p className={style.gameDescription}>{gameDescription}</p>
        </a>
        <br />
        <a href="#">
          <p className={style.gameGenres}>{gameGenres}</p>
        </a>
        <div className={style.gameDateContainer}>{/* for position icon and date */}
          <div>
            <p className={style.gameCracked}>{gameCracked}</p>
          </div>
          <FaClock />
          <p className={style.gameDate}>{gameDate}</p>
        </div>
      </div>
    </div>
  );
}

Game.defaultProps = {
  gameTitle: "Game Title",
  gameDescription: "Game Description",
  gameImage: "default-image-path.jpg",
  gameDate: "Game Date",
  gameType: "Game Type",
  gameGenres: "Game Genres",
  gameCracked: "Game Cracked",
};

Game.propTypes = {
  gameTitle: PropTypes.string.isRequired,
  gameDescription: PropTypes.string.isRequired,
  gameImage: PropTypes.string.isRequired,
  gameDate: PropTypes.string.isRequired,
  gameType: PropTypes.string.isRequired,
  gameGenres: PropTypes.string.isRequired,
  gameCracked: PropTypes.string.isRequired,
};