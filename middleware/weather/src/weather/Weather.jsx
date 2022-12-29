import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { weatherDataSelector } from "./weather.selectors";
import * as weatherActions from "./weather.actions";

class Weather extends React.Component {
  componentDidMount() {
    this.props.getWeatherData();
  }
  render() {
    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {this.props.weatherData.map((data) => (
            <li key={data.id} className="city">
              <span className="city__name">{data.name}</span>
              <span className="city__temperature">{data.temperature}</span>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

Weather.propTypes = {
  weatherData: PropTypes.array,
};

Weather.defaultValue = {
  weatherData: [],
};

const mapState = (state) => {
  return {
    weatherData: weatherDataSelector(state),
  };
};

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
