import "./Side.css";
import SearchLogo from "../assets/search.svg";

function Side(props) {
  return (
    <div className="Side">
      <div className="search">
        <input
          type="text"
          placeholder="Search Location"
          onChange={props.handleQuery}
          onKeyPress={props.handleChange}
        />
        <img class="search-icon" src={SearchLogo} alt="" />
      </div>

      <div className="locations">
        <div className="location-1">
          <p>{props.weather.name}</p>
          <p>{Math.round(props.weather.main.temp)} °C</p>
        </div>

        <div className="location-2">
          <p>Kisumu</p>
          <p>25° C</p>
        </div>
        <div className="location-3">
          <p>Limuru</p>
          <p>12° C</p>
        </div>
      </div>
      <hr />
      <h1>Weather Details</h1>
      <div className="details">
        <div className="detail-1">
          <p>{props.weather.weather[0].description}</p>
        </div>
        <div className="detail-2">
          <p>Humidity</p>
          <p>{props.weather.main.humidity}%</p>
        </div>
        <div className="detail-3">
          <p>Wind</p>
          <p>{props.weather.wind.speed} Km/H</p>
        </div>
      </div>
    </div>
  );
}

export default Side;
