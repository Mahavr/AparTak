import axios from "axios";
import { createClient } from "pexels";

export const getPhotosAndUpdateApartments = async () => {
  const client = createClient(
    "E5UG2BZMseCMsVzM3ZyyhWgtSGRImuJFK3aztRliVTdAL9HiqhfOQFtk"
  );
  const query = "interior";
  const allPhotos = [];

  try {
    const photos = await client.photos.search({
      query,
      orientation: "landscape",
      page: 2,
      per_page: 80,
    });

    allPhotos.push(...photos.photos.map((photo) => photo.src.original));

    console.log(`Отримано ${allPhotos.length} фото`);
  } catch (error) {
    console.error("Помилка при отриманні фотографій з Pexels:", error);
    return;
  }

  try {
    const response = await axios.get(
      "https://674c557454e1fca9290c3e36.mockapi.io/apartament"
    );
    const apartments = response.data;

    console.log(`Отримано ${apartments.length} квартир`);

    for (const apartment of apartments) {
      const selectedPhotos = allPhotos.slice(0, 4);
      allPhotos.splice(0, 4);

      await axios.put(
        `https://674c557454e1fca9290c3e36.mockapi.io/apartament/${apartment.id}`,
        {
          ...apartment,
          photos: selectedPhotos,
        }
      );

      console.log(`Оновлено квартиру з ID ${apartment.id}`);
    }
  } catch (error) {
    console.error("Помилка при роботі з сервером:", error);
  }
};
