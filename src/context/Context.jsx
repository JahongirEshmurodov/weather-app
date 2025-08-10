import axios from "axios";
import React, { createContext, useState } from "react";

export const Context = createContext();
function ContextProvider({ children }) {
  const [data, setdata] = useState();
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  async function getWeather(city = "toshkent") {
    try {
      setloading(true);
      let { data } = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${
          import.meta.env.VITE_APIKEY
        }`
      );
      if (data.length === 0) {
        seterror(true);
      } else {
        seterror(false);
      }
      let { lat, lon, name } = data[0];
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_APIKEY
        }&units=metric`
      );
      setdata({ ...response.data, name });
      setloading(false);
    } catch (error) {
      console.log(error.message);
    } finally {
      setloading(false);
    }
  }
  return (
    <Context.Provider value={{ getWeather, data, loading, error }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
