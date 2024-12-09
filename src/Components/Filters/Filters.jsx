import { useState, useEffect } from "react";
import {
  getFilters,
  setFilter,
  resetFilters,
} from "../../service/filtersService";
import css from "./Filters.module.css";

export const Filters = ({ onFiltersChange }) => {
  const [filters, setFiltersState] = useState(getFilters());
  const cities = [
    "Київ",
    "Львів",
    "Одеса",
    "Харків",
    "Дніпро",
    "Запоріжжя",
    "Вінниця",
    "Полтава",
    "Чернівці",
    "Херсон",
  ];

  useEffect(() => {
    setFiltersState(getFilters()); // Синхронізуємо локальний стан із сервісом
  }, []);

  const handleFilterChange = (key, value) => {
    setFilter(key, value); // Оновлюємо значення в сервісі
    const updatedFilters = { ...filters, [key]: value };
    setFiltersState(updatedFilters); // Оновлюємо локальний стан
    onFiltersChange(updatedFilters); // Передаємо оновлені фільтри в батьківський компонент
  };

  const handleResetFilters = () => {
    resetFilters(); // Скидаємо фільтри в сервісі
    setFiltersState(getFilters()); // Оновлюємо локальний стан
    onFiltersChange(getFilters()); // Передаємо скинуті фільтри в батьківський компонент
  };

  return (
    <>
      <div className={css.filtersWrapper}>
        <select
          className={css.picker}
          value={filters.dealType}
          onChange={(e) => handleFilterChange("dealType", e.target.value)}
        >
          <option value="">Тип угоди</option>
          <option value="Продаж">Продаж</option>
          <option value="Оренда">Оренда</option>
          <option value="Обмін">Обмін</option>
        </select>
        <select
          className={css.picker}
          value={filters.city}
          onChange={(e) => handleFilterChange("city", e.target.value)}
        >
          <option value="">Місто</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        <select
          className={css.picker}
          value={filters.area}
          onChange={(e) => handleFilterChange("area", e.target.value)}
        >
          <option value="">Площа</option>
          <option value="50">до 50м&#178;</option>
          <option value="60">50м&#178; - 60м&#178;</option>
          <option value="70">60м&#178; - 70м&#178;</option>
          <option value="80">70м&#178; - 80м&#178;</option>
          <option value="90">80м&#178; - 90м&#178;</option>
          <option value="100">від 90м&#178;</option>
        </select>
        <select
          className={css.picker}
          value={filters.rooms}
          onChange={(e) => handleFilterChange("rooms", e.target.value)}
        >
          <option value="">Кількість кімнат</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4 та більше</option>
        </select>
      </div>

      <div className={css.filtersWrapper}>
        <p className={css.priceText}>Ціна:</p>
        <input
          className={css.picker}
          type="number"
          placeholder="Від"
          value={filters.minPrice}
          onChange={(e) => handleFilterChange("minPrice", e.target.value)}
        />
        <input
          className={css.picker}
          type="number"
          placeholder="До"
          value={filters.maxPrice}
          onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
        />
        <button className={css.filtersButton} onClick={handleResetFilters}>
          Скинути усе
        </button>
      </div>
    </>
  );
};
