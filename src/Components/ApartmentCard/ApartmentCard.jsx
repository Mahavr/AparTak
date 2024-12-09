import css from "./ApartmentCard.module.css";
import { NavLink } from "react-router-dom";

const defaultImgPath = "images/mainApartsImages/apart";

export const ApartmentCard = ({ data, id, size }) => {
  console.log(data);
  const wrapperClass =
    size === "big"
      ? ` ${css.wrapper} ${css.wrapperBig} `
      : `${css.wrapper} ${css.wrapperSmall}`;

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <>
      <div
        className={wrapperClass}
        style={{ backgroundImage: `url(${defaultImgPath}${id}.png)` }}
      >
        <p className={css.title}>{data[id].rooms} -x кімнатна квартира</p>
        <div className={css.container}>
          <ul className={css.list}>
            <li className={css.item}>
              <p>{data[id].type}</p>
            </li>
            <li className={css.item}>
              <p>
                {data[id].city} {data[id].address}
              </p>
            </li>
            <li className={css.item}>
              <p style={{ marginTop: "15px" }}>
                {data[id].type === "Обмін"
                  ? data[id].price
                  : `${data[id].price}$`}
              </p>
            </li>
          </ul>
          <NavLink to={`/apartments/${id}`} className={css.seeMoreBtn}>
            Детальніше
          </NavLink>
        </div>
      </div>
    </>
  );
};
