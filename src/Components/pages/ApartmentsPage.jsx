import { useEffect, useState } from "react";
import { fetchApartmentsData } from "../../service/fetchApartmentsData";
import { ApartmentListCard } from "../ApartmentListCard/apartmentListCard";

import css from "./pages.module.css";
import Loader from "../Loader/loader";
import { Filters } from "../Filters/Filters";
import { getFilters } from "../../service/filtersService";

export default function ApartmentsPage() {
  const [apartmentsData, setApartmentsData] = useState(null);
  const [loading, setLoading] = useState(true); // Стан завантаження
  const [error, setError] = useState(null); // Статус помилки
  const [filters, setFilters] = useState(getFilters());

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Встановлюємо стан завантаження
        const data = await fetchApartmentsData();
        setApartmentsData(data);
      } catch (error) {
        setError(`Не вдалося завантажити дані. ${error}`);
      } finally {
        setLoading(false); // Завантаження завершено
      }
    };
    fetchData();
  }, []);

  const filteredApartments = apartmentsData?.filter((apartment) => {
    return (
      (filters.dealType
        ? apartment.type?.toLowerCase() === filters.dealType?.toLowerCase()
        : true) &&
      (filters.city
        ? apartment.city?.toLowerCase() === filters.city?.toLowerCase()
        : true) &&
      (filters.area
        ? (Number(filters.area) == 50 && apartment.area < 50) ||
          (apartment.area <= Number(filters.area) &&
            apartment.area + 10 >= Number(filters.area)) ||
          (Number(filters.area) == 100 && apartment.area > 90)
        : true) &&
      (filters.rooms
        ? apartment.rooms === Number(filters.rooms) ||
          (Number(filters.rooms) == 4 &&
            apartment.rooms > Number(filters.rooms))
        : true) &&
      (filters.minPrice ? apartment.price >= Number(filters.minPrice) : true) &&
      (filters.maxPrice ? apartment.price <= Number(filters.maxPrice) : true)
    );
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <section className={css.apartsPageSection}>
        <div>
          <h2 className={css.apartsPageTitle}>Наші квартири</h2>
          <div>
            <Filters onFiltersChange={handleFiltersChange} />
          </div>
        </div>
        <div>
          <ul className={css.cardsList}>
            {error ? (
              <div>
                <p>{error}</p>
              </div>
            ) : filteredApartments && filteredApartments.length > 0 ? (
              filteredApartments.map((apartment, index) => (
                <li key={index}>
                  <ApartmentListCard data={apartment} />
                </li>
              ))
            ) : (
              <li>Нажаль у нас не знайшлось квартир із заданими параметрами</li>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
}
