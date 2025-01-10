import { useState } from 'react';
import { fetchWeather } from './api';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    if (location) {
      setError(false); 
      try {
        const data = await fetchWeather(location);
        if (data.current) {
          setWeatherData(data); 
        }
      } catch (err) {
        setError(true); 
      }
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter location"
          className="location-input"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error ? (
        <p>Error fetching weather data. Please check the location and try again.</p>
      ) : (
        ""
      )}

      {weatherData && (
        <div className="weather-card">
          <h2>{weatherData.location.name}</h2>
          <p>{weatherData.current.temp_c}°C / {weatherData.current.temp_f}°F</p>
          <p>{weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
}

export default App;
