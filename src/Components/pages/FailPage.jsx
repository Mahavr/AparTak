import { Link } from "react-router-dom";
import css from "./pages.module.css";

export default function FailPage() {
  return (
    <div className={css.failPage}>
      <p>Sorry this page not found 😓</p>

      <Link to="/" className={css.backToReality}>
        Повернутись на головну
      </Link>
    </div>
  );
}
