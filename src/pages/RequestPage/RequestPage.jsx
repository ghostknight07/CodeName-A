import Navbar from "../../components/Navbar/Navbar.jsx";
import style from "./RequestPage.module.css";

function RequestPage() {
  return (
    <div className={style["full-page"]}>
      <Navbar />
      <div className={style["form-container"]}>
        <h1 className={style["form-title"]}>Fill Out Our Form</h1>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSek9kpPqVEQexPswh-01H5jZJvtaGzXUt7ZcFmxrRg7xtiq5w/viewform?embedded=true"
          className={style["google-form"]}
          title="Google Form"
          allowFullScreen
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default RequestPage;
