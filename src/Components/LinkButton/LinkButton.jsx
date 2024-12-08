import { NavLink } from "react-router-dom";
import css from "./LinkButton.module.css";

export const LinkButton = ({ href, children, onOpen }) => {
  return (
    <>
      <NavLink className={css.button} to={href} onClick={onOpen}>
        {children}
      </NavLink>
    </>
  );
};
