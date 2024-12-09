import css from "./pages.module.css";
import { Card } from "../Card/Card";
import { LinkButton } from "../LinkButton/LinkButton";
import { Modal } from "../Modal/Modal";
import { ApartmentCard } from "../ApartmentCard/ApartmentCard";
import { useState, useEffect } from "react";
import { fetchApartmentsData } from "../../service/fetchApartmentsData";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apartmentsData, setApartmentsData] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApartmentsData();
      setApartmentsData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* hero */}
      <section className={css.section}>
        <div className={css.wrapper}>
          <h1 className={css.title}>AparTak — Там, де починається комфорт</h1>
        </div>
      </section>
      {/* why we */}
      <section>
        <div className={css.container}>
          <h2 className={css.sectionTitle}>Чому ми?</h2>
          <ul className={css.list}>
            <li className={css.item}>
              <Card icon={"/icon2.svg"}>Прозорі умови та комфортний пошук</Card>
            </li>
            <li>
              <Card icon={"/icon1.svg"}>
                Індивідуальний
                <br />
                підхід
              </Card>
            </li>
            <li>
              <Card icon={"/icon3.svg"}>Сучасні квартири та офіси</Card>
            </li>
            <li>
              <Card className={css.icon} icon={"/icon4.svg"}>
                Зручні умови обміну
              </Card>
            </li>
          </ul>
        </div>
      </section>
      {/* our apartments */}
      <section>
        <div className={css.container}>
          <h2 className={css.sectionTitle}>Наші квартири</h2>
          <div className={css.apartmentsCardsWrapper}>
            <div className={css.apartmentsCardsContainer}>
              <ApartmentCard data={apartmentsData} id={1} size={"big"} />
              <ApartmentCard data={apartmentsData} id={2} size={"small"} />
            </div>
            <div className={css.apartmentsCardsContainer}>
              <ApartmentCard data={apartmentsData} id={3} size={"small"} />
              <ApartmentCard data={apartmentsData} id={4} size={"big"} />
            </div>
          </div>
        </div>
      </section>
      {/* contact */}
      <section className={css.contact}>
        <div className={css.wrapperContact}>
          <h3 className={css.titleContact}>
            Хочете розмістити оголошення на нашому сайті?
            <br /> Зв’яжіться з нашим менеджером, і ми допоможемо <br />
            швидко та зручно опублікувати вашу пропозицію!
          </h3>
          <div className={css.btn}>
            <LinkButton onOpen={openModal} type="submit" href={"/"}>
              Зв’язатись
            </LinkButton>
          </div>
        </div>
      </section>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}
