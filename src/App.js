import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Side from "./components/Side";
// brayojava key
const api = {
  key: "6b6dc93045f18431ea29a37236b08033",
  base: "http://api.openweathermap.org/data/2.5/",
};
function App() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    name: "Nairobi",
    main: {
      temp: 16,
      humidity: 54,
    },
    weather: [{ description: "Clear sky", main: "Clouds" }],
    wind: { speed: 56 },
    sys: { country: "KE" },
  });

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          if (!result.main) {
            alert(result.message);
          } else {
            setWeather(result);
            setQuery("");
            setCount(count + 1);
          }
        });
    }
  };
  // change background

  const [clas, setClas] = useState(weather.weather[0].main);

  useEffect(() => {
    setClas(weather.weather[0].main);
  }, [weather]);

  return (
    <div className={`App ${clas}`}>
      <Main weather={weather} />
      <Side
        handleChange={(evt) => search(evt)}
        handleQuery={(e) => setQuery(e.target.value)}
        weather={weather}
      />
    </div>
  );
}

export default App;
