import css from "./ApartmentCard.module.css";
import { Link } from "react-router-dom";
export const ApartmentCard = ({ data, id, size, img }) => {
  console.log(data)
  const wrapperClass =
    size === "big"
      ? ` ${css.wrapper} ${css.wrapperBig} `
      : `${css.wrapper} ${css.wrapperSmall}`;
  
if (!data || data.length === 0) {
  return null;
}

  return (
    <>
      <div className={wrapperClass} style={{ backgroundImage: `url(${img})` }}>
        <p className={css.title}>{data[id].rooms} -x кімнатна квартира</p>
        <div className={css.container}>
          <ul className={css.list}>
            <li className={css.item}>
              <p className={css.text}>{data[id].type}</p>
            </li>
            <li className={css.item}>
              <p className={css.text}>
                {data[id].city} {data[id].address}  
              </p>
            </li>
            <li className={css.item}>
              <p className={css.text}>{data[id].price}</p>
            </li>
          </ul>
          <Link>Детальніше</Link>
        </div>
      </div>
    </>
  );
};
