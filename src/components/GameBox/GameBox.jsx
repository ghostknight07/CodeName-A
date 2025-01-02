import style from "./GameBox.module.css";
import { FaClock } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Game({ gameTitle, gameDescription, gameImage, gameDate, gameType }) {
    return (
        <div className={style.gameBoxContainer}> {/* full page  */}
            <div className={style.gameImageContainer}>{/* for image */}
                <img src={gameImage} alt={gameTitle} />
            </div>
            <div className={style.gameInfo}>{/* FOR Full info */}
              <a href="#"> {/* for link every word */}
                <div className={style.gameTypeContainer}>{/* for game type */}
                <h3 className={style.gameType}>{gameType}</h3>
                </div>

                <h2 className={style.gameTitle}>{gameTitle}</h2>
                <br />

                <p className={style.gameDescription}>{gameDescription}</p>

                <div className={style.gameDateContainer}>{/* for position icon and date */}
                    <FaClock /> <p className={style.gameDate}>{gameDate}</p>
                    
                </div> </a>
            </div>
        </div>
    );
}

Game.defaultProps = {
  gameTitle: "Game Title",
  gameDescription: "Game Description",
  gameImage: "default-image-path.jpg",
  gameDate: "Game Date",
};

Game.propTypes = {
  gameTitle: PropTypes.string.isRequired,
  gameDescription: PropTypes.string.isRequired,
  gameImage: PropTypes.string.isRequired,
  gameDate: PropTypes.string.isRequired,
};

