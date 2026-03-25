import React, { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);

  // Fetch Weather Data
  useEffect(() => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Bhubaneswar&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data);
        setWeather(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Agro Advice Logic
  const getAdvice = (data) => {
    if (!data) return "";

    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const condition = data.weather[0].main;

    if (condition.includes("Rain")) {
      return "🌧 Avoid irrigation today";
    } else if (temp > 35) {
      return "🔥 High temperature - Increase watering";
    } else if (humidity > 80) {
      return "💧 High humidity - Risk of crop disease";
    } else {
      return "✅ Good farming conditions";
    }
  };

  return (
    <div className="App">

      {/* Navbar */}
      <nav className="navbar">
        <img src={logo} alt="AgroGuide Logo" className="logo-img" />
        <ul className="nav-links">
          <li>Home</li>
          <li>Crop Recommendation</li>
          <li>Weather</li>
          <li>Crop Health</li>
        </ul>
        <div className="Loginbutton">
          <button className="btn">Login</button>
          <button className="btn">Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="Title">Organic Farming & Agriculture</h1>
          <p>Grow naturally with modern techniques and sustainable farming</p>
          <div className="hero-buttons">
            <button className="btn">Discover More</button>
            <button className="btn-outline">See All Services</button>
          </div>
        </div>
      </section>

      {/* 🌦 Weather Section (NEW) */}
      <section style={{ textAlign: "center", margin: "40px" }}>
        <h2>🌾 Agro Weather Dashboard</h2>

        {weather ? (
          <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
            display: "inline-block"
          }}>
            <h3>{weather.name}</h3>
            <p>🌡 Temp: {weather.main.temp}°C</p>
            <p>🌥 Condition: {weather.weather[0].main}</p>
            <p>💧 Humidity: {weather.main.humidity}%</p>
            <p style={{ fontWeight: "bold" }}>
              📢 {getAdvice(weather)}
            </p>
          </div>
        ) : (
          <p>Loading weather...</p>
        )}
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>We Offer Eco & Agriculture Services</h2>

        <div className="card-container">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854" />
            <h3>Agriculture Products</h3>
            <p>Fresh and organic farm products directly from farms.</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0" />
            <h3>Soil Fertilization</h3>
            <p>Improve soil quality for better crop production.</p>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30" />
            <h3>Dairy Production</h3>
            <p>High-quality dairy with natural feeding systems.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Ecoland. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;