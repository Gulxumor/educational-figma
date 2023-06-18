import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = async (e) => {
    if (e.key === "Enter" || e.key === "Ok") {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
      setLocation("");
    }
  };

  return (
    <div
      className={
        typeof data?.main != "undefined"
          ? data?.main?.temp < 16
            ? data?.main?.temp > 40
              ? "app"
              : "app hot"
            : "app cold"
          : "app"
      }
    >
      <div className="search">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
          className={
            typeof data?.main != "undefined"
              ? data?.main?.temp < 16
                ? ""
                : " border"
              : ""
          }
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            {data?.name ? (
              <p>
                {data?.name}, {data?.sys?.country}
              </p>
            ) : (
              <div className="bold not-found">{data?.message}</div>
            )}
          </div>
          <div className="temp">
            {data?.main ? (
              <h1>{Math.round(((data?.main?.temp - 32) * 5) / 9)}°C</h1>
            ) : null}
          </div>
          <div className="description">
            {data?.weather ? <p>{data?.weather[0]?.main}</p> : null}
          </div>
        </div>

        {data?.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              <p>Feels Like</p>
              {data?.main ? (
                <p className="bold">
                  {Math.round(((data?.main?.feels_like - 32) * 5) / 9)}°C
                </p>
              ) : null}
            </div>
            <div className="humidity">
              <p>Humidity</p>
              {data?.main ? (
                <p className="bold">{data?.main?.humidity}%</p>
              ) : null}
            </div>
            <div className="wind">
              <p>Wind Speed</p>
              {data?.wind ? (
                <p className="bold">{data?.wind?.speed?.toFixed()} MPH</p>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
