import axios from "axios";

export async function fetchApartmentsById( id ) {
  try {
    const response = await axios.get(
      `https://674c557454e1fca9290c3e36.mockapi.io/apartament/${id}`
    );

    if (response.data) {
      console.log(response.data);
      return response.data;
    } else {
      throw new Error("Error (");
    }
  } catch (error) {
    console.warn(error.message);
    throw error;
  }
}
