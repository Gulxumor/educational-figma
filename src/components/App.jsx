import { useState } from "react";
import { months, days } from "../utils/mock";
const api = {
  key: "3b3d66e6fd0fafb2fe923421ca903742",
  baseUrl: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const dateBuilder = (s) => {
    let day = days[s.getDay()];
    let date = s.getDate();
    let month = months[s.getMonth()];
    let year = s.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((res) => {
          setWeather(res);
          setQuery("");
          console.log(res);
        });
    }
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? weather.main.temp > 30
              ? "app hot"
              : "app "
            : "app cold"
          : "app"
      }
    >
      <main
        className={
          typeof weather.main != "undefined"
            ? weather.main.temp > 16
              ? "main main-hot"
              : "main"
            : "main"
        }
      >
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={query}
            onKeyDown={search}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {typeof weather.main != "undefined" ? (
          <div className="location-box">
            <div
              className={
                typeof weather.main != "undefined"
                  ? weather.main.temp > 16
                    ? "location date-hot"
                    : "location"
                  : "location"
              }
            >
              {weather.name}, {weather.sys.country}
            </div>
            <div
              className={
                typeof weather.main != "undefined"
                  ? weather.main.temp > 16
                    ? "date date-hot"
                    : "date"
                  : "date"
              }
            >
              {dateBuilder(new Date())}
            </div>

            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)} °C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default App;
