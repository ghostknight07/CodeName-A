import Navbar from "../../components/Navbar/Navbar";
import style from "./GamesPage.module.css";

function GamesPage() {
  return (
    <div className={style["Gamesfull-page"]}>
      <Navbar />
      <div className={style["Gamespage-container"]}>
        <h1>Games Page</h1>
      </div>
    </div>
  );
}

export default GamesPage;
