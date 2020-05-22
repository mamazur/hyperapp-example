import "regenerator-runtime/runtime";
import { request } from "@hyperapp/http";
import { config } from "../../config";
export const GeoFindMe = (state) => [
  { ...state },
  saveGeocity(geoFindCity, 2000),
];

const getPosition = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
};

const saveGeocity = (nextAction) => [
  async (dispatch, { action, delay }) => {
    getPosition()
      .then((position) => {
        dispatch((state) => ({
          ...state,
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }));
        setTimeout(() => dispatch(action), delay);
      })
      .catch((error) => {
        dispatch((state) => ({
          ...state,
          error: error.message,
        }));
      });
  },
  { action: nextAction },
];

const getCity = (lat, lon, lang = "en") => {
  const BASIC_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const URL = `${BASIC_URL}lat=${lat}&lon=${lon}&APPID=${config.APPID}&lang=${lang}`;
  return URL;
};

const geoFindCity = (state) => [
  { ...state },
  request({
    url: getCity(state.lat, state.lon),
    expect: "json",
    action: GotCity,
  }),
];

const GotCity = (state, response) => {
  const city = response.name || "Error: Please insert your city manually";
  return {
    ...state,
    city,
  };
};
