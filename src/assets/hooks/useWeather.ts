import { useState } from "react";
import { WeatherData } from "../../Components/WeatherCard";
import { getCurrentLocation } from "./getCurrentLocation";

const API_KEY = "a1abd1bc8e58bd4c3fded4aa31556c3b";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const useWeather = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchWeather = async (city: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=pt`);
            if (!response.ok) throw new Error("Cidade não foi encontrada");

            const data: WeatherData = await response.json();
            setWeather(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro desconhecido");
        } finally {
            setLoading(false);
        }
    };

    const fetchWeatherByCoordinates = async (
        latitude: number,
        longitude: number
      ) => {
        setLoading(true);
        setError(null);
    
        try {
          const response = await fetch(
            `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=pt`
          );
          if (!response.ok) throw new Error("Erro ao buscar clima");
    
          const data: WeatherData = await response.json();
          setWeather(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Erro desconhecido");
        } finally {
          setLoading(false);
        }
      };
    
      const getWeatherForCurrentLocation = () => {
        getCurrentLocation(
          (latitude, longitude) => {
            fetchWeatherByCoordinates(latitude, longitude);
          },
          (errorMessage) => {
            setError(errorMessage);
          }
        );
      };

      return {
        weather,
        fetchWeather,
        getWeatherForCurrentLocation,
        loading,
        error,
    };
}
