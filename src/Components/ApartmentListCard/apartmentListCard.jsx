import css from "./apartmentListCard.module.css";
import { NavLink } from "react-router-dom";

export const ApartmentListCard = ({ data }) => {
  return (
    <>
      <div className={css.ApartmentListCard}>
        <img
          className={css.cardPhoto}
          src={data.photos[2]}
          alt={data.photos[2]}
        />
        <div className={css.cardInfoWrapper}>
          <div className={css.cardTextWrapper}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p className={css.title}>{data.rooms}-x кімнатна квартира</p>
              <p>{data.area}м&#178;</p>
            </div>
            <p>
              {data.city} {data.address}
            </p>
            <p style={{ opacity: 0.5 }}>{data.description}</p>
          </div>

          <div className={css.cardPriceWrapper}>
            <p>{data.type}</p>
            <p style={{ color: "var(--accent)", fontSize: "20px" }}>
              {data.type === "Обмін" ? data.price : `${data.price}$`}
            </p>
          </div>

          <div className={css.seeMoreBtnWrapper}>
            <NavLink to={`/apartments/${data.id}`} className={css.seeMoreBtn}>
              Детальніше
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
