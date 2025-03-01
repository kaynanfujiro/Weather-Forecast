import { useWeather } from "./assets/hooks/useWeather";
import WeatherForm  from "./Pages/WeatherForm";
import Layout from "./Pages/Layout"
import { WeatherInfo } from "./Components/WeatherInfo";
import "./index.css";
import { StandardWeather } from "./Pages/StandardWeather";
import { useEffect } from "react";

function App() {

  const { weather, fetchWeather, getWeatherForCurrentLocation ,loading, error } = useWeather();

  useEffect(() => {
    getWeatherForCurrentLocation();
  }, []);

  return (
    <>
      <Layout>
        <StandardWeather onSearch={fetchWeather} />
        <WeatherForm onSearch={fetchWeather} loading={loading}/>

        {error && <p className="mt-4 text-red-500">{error}</p>}
        
        {weather && <WeatherInfo weather={weather} />}
      </Layout>
    </>
  )
}



export default App
