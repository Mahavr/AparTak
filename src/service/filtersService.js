// service/filtersService.js
let filtersState = {
  dealType: "",
  city: "",
  area: "",
  rooms: "",
  minPrice: "",
  maxPrice: "",
};

export const getFilters = () => {
  return { ...filtersState }; // Повертаємо копію об'єкта
};

export const setFilter = (key, value) => {
  filtersState[key] = value;
};

export const resetFilters = () => {
  filtersState = {
    dealType: "",
    city: "",
    area: "",
    rooms: "",
    minPrice: "",
    maxPrice: "",
  };
};
