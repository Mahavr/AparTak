import axios from "axios";
// import { getPhotosAndUpdateApartments } from "./getPhotos";

export async function fetchApartmentsData() {
  // getPhotosAndUpdateApartments();
  try {
    const response = await axios.get(
      `https://674c557454e1fca9290c3e36.mockapi.io/apartament`
    );

    if (response.data && Array.isArray(response.data)) {
      return response.data;
    } else {
      throw new Error("Невірні дані");
    }
  } catch (error) {
    console.warn(error.message);
    throw error;
  }
}
