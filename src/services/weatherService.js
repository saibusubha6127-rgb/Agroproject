const API_KEY = a4a14db10820fde69c34067b37845ecc;

export const getWeatherByCity = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
};