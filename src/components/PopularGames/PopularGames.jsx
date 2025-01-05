import style from "./PopularGames.module.css";
import { FaClock } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Game({
  gameTitle,
  gameImage,
  gameDate,
  gameType,
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
        <div>
            <p className={style.gameCracked}>{gameCracked}</p>
          </div>
        <br />
        <div className={style.gameDateContainer}>{/* for position icon and date */}
          <FaClock /> <p className={style.gameDate}>{gameDate}</p>
          
        </div>
      </div>
    </div>
  );
}

// default props is outdated. Must be changed to javascript default functions
Game.defaultProps = {
  gameTitle: "Game Title",
  
  gameImage: "default-image-path.jpg",
  gameDate: "Game Date",
  gameType: "Game Type",
 
  gameCracked: "Game Cracked",
};

Game.propTypes = {
  gameTitle: PropTypes.string.isRequired,
  
  gameImage: PropTypes.string.isRequired,
  gameDate: PropTypes.string.isRequired,
  gameType: PropTypes.string.isRequired,
  gameCracked: PropTypes.string.isRequired,
};
