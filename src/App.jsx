import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">AgroGuide</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>Crop Recomendation</li>
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
          <h1>Organic Farming & Agriculture</h1>
          <p>
            Grow naturally with modern techniques and sustainable farming
          </p>
          <div className="hero-buttons">
            <button className="btn">Discover More</button>
            <button className="btn-outline">See All Services</button>
          </div>
        </div>
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