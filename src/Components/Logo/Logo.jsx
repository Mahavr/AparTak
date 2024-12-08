import LogoIcon from "/logo.svg";
import css from "./Logo.module.css";
import { NavLink } from "react-router-dom";
export const Logo = () => {
  return (
    <div>
      <NavLink className={css.text} to="/">
        <img src={LogoIcon} className={css.logo} alt="logo" />
        AparTak
      </NavLink>
    </div>
  );
};
