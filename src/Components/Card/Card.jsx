import css from "./Card.module.css";

export const Card = ({ icon, children }) => {
  return (
    <li>
      <div className={css.card}>
        <img src={icon} className={css.icon} />
        <p> {children}</p>
      </div>
    </li>
  );
};
