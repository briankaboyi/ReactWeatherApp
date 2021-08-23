import "./Main.css";

function Main(props) {
  return (
    <div className="Main">
      <p className="logo">brian.Js Weather</p>

      <div className="overview">
        <p class="temp">
          {Math.round(props.weather.main.temp)}
          <span className="dot">°</span>
        </p>
        <p class="location">
          {props.weather.name}, {props.weather.sys.country}
        </p>
        <p class="date">{Date().slice(0, 16)}</p>

        <img
          src={
            require(`../assets/${props.weather.weather[0].main}.png`).default
          }
          alt="cloudy.svg"
        />
        <p class="weather">{props.weather.weather[0].main}</p>
        <p className="weather-description">
          {props.weather.weather[0].description}
        </p>
      </div>
    </div>
  );
}

export default Main;
