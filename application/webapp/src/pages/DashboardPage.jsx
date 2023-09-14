import React, { useState, useEffect } from 'react';
import NavBar from '../assets/NavBar';
import image from '../assets/scenicview.jpeg';

function DashboardPage() {
  const [data, setData] = useState();
  const [location, setLocation] = useState('San Francisco');
  const [error, setError] = useState(false);

  const fetchWeatherData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Location not found');
      })
      .then((apiData) => {
        setData(apiData);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleGetLocation = (event) => {
    setLocation(event);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchWeatherData();
    }
  };

  return (
    <>
      <NavBar />
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: `url(${image})`,
        }}
      >
        {error && (
          <div style={{
            position: 'relative',
            color: 'red',
            bottom: '70px',
            fontSize: '30px',
            fontWeight: 'bold',
          }}
          >
            Invalid Location

          </div>
        )}
        <div
          className="search-container"
          style={{
            position: 'relative',
            bottom: '60px',
          }}
        >
          <input
            className="input"
            value={location}
            type="text"
            placeholder="Enter City"
            onChange={(event) => handleGetLocation(event.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              border: 'none',
              borderRadius: '25px',
              padding: '.4rem 1.5rem',
              background: 'rgba(0, 0, 0, 0.3)',
              width: '200px',
              color: 'white',
            }}
          />
        </div>
        <div
          className="weather-container"
          style={{
            maxWidth: '500px',
            height: '400px',
            borderRadius: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="location"><h2>{data && data.name}</h2></div>
          <div className="temp" style={{ fontSize: '60px' }}>
            {data?.main?.temp}
            °F
          </div>
          <div className="description">{data?.weather?.[0]?.main}</div>
          <div
            className="weather-container-bottom"
            style={{
              display: 'flex', justifyContent: 'center', padding: '50px', gap: '20px',
            }}
          >
            <div className="humidity">
              Humidity:
              {' '}
              {data?.main?.humidity}
              %
            </div>
            <div className="wind">
              Winds:
              {' '}
              {data?.wind?.speed}
              mph
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
