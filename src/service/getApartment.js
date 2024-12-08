import axios from "axios";

export const getApartments = async () => {
  const url = "https://674c557454e1fca9290c3e36.mockapi.io/apartament";

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {

      return {
        response
      };
    } else {
      throw new Error("Помилка запиту");
    }
  } catch (error) {
    console.error("Помилка:", error);
    throw error;
  }
};
