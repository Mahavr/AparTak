import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./pages.module.css";
import { fetchApartmentsById } from "../../service/getApartmentById";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Стилі для каруселі
import Loader from "../Loader/loader";

export default function ApartmentDetails() {
  const { id } = useParams(); // Отримання параметру id з URL
  const [data, setData] = useState(null); // Стан для збереження даних
  const [loading, setLoading] = useState(true); // Стан для відстеження завантаження
  const [error, setError] = useState(null); // Стан для збереження помилок

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Початок завантаження
        const apartmentData = await fetchApartmentsById(id);
        setData(apartmentData); // Збереження даних
      } catch (error) {
        setError(`Не вдалося завантажити дані: ${error.message}`);
      } finally {
        setLoading(false); // Завантаження завершено
      }
    };

    fetchData();
  }, [id]);

  // Показувати стан завантаження або помилку
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  // Відображення даних квартири
  return (
    <div className={css.container} style={{ display: "flex", gap: "85px" }}>
      <div className={css.photosCarousel}>
        {data.photos && data.photos.length > 0 ? (
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={true}
            showStatus={false}
          >
            {data.photos.map((photo, index) => (
              <div key={index}>
                <img src={photo} alt={`Фото ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        ) : (
          <p>Фото відсутні</p>
        )}
      </div>
      <div className={css.infoWrapper}>
        <p className={css.ApartTitle}>{data.rooms}-x кімнатна квартира</p>
        <p style={{ marginBottom: "200px" }}>Опис: {data.description}</p>
        <p className={css.apartText}>Площа - {data.area}м&#178;</p>
        <p className={css.apartText}>
          Місцезнаходження - {data.city}, {data.address}
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p className={css.apartText}>{data.type}</p>
          <p className={css.apartText}>
            Ціна:{" "}
            <span>{data.type === "Обмін" ? data.price : `${data.price}$`}</span>
          </p>
        </div>
        <a href={`tel:${data.tel}`} className={css.buttonStyle}>
          Зателефонувати
        </a>
      </div>
    </div>
  );
}
