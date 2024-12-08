import css from "./Card.module.css";

export const Card = ({ icon, children }) => {
  return (
    <>
      <div className={css.card}>
        <img src={icon} className={css.icon} />
        <p> {children}</p>
      </div>
    </>
  );
};
