import { useEffect, useState } from "react";
import { getWeatherByCity } from "../services/weatherService";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    const data = await getWeatherByCity("Bhubaneswar");
    setWeather(data);
    generateAdvice(data);
  };

  const generateAdvice = (data) => {
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const condition = data.weather[0].main;

    let msg = "";

    if (condition.includes("Rain")) {
      msg = "🌧 Avoid irrigation today";
    } else if (temp > 35) {
      msg = "🔥 High temperature - Increase watering";
    } else if (humidity > 80) {
      msg = "💧 High humidity - Risk of crop disease";
    } else {
      msg = "✅ Good farming conditions";
    }

    setAdvice(msg);
  };

  return (
    <div>
      <h2>🌾 Agro Weather</h2>

      {weather ? (
        <>
          <p>🌡 Temp: {weather.main.temp}°C</p>
          <p>🌥 Condition: {weather.weather[0].main}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>📢 Advice: {advice}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Weather;
