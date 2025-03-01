import { WeatherData } from "./WeatherCard";
import humidityIcon from "../assets/images/humidity.png"
import DownTemp from "../assets/images/down-arrow.png"
import UpTemp from "../assets/images/up-arrow.png"
import TermoTemp  from "../assets/images/Termo.png"


interface WeatherInfoProps {
    weather: WeatherData;
}

const textinfo = "text-indigo-200 flex lg:text-2xl md:1xl"

export const WeatherInfo = ({weather}: WeatherInfoProps) => {
    return (
        <div className=" lg:w-[500px] lg:h-[600px] w-[300px] h-[auto] bg-gray-500 flex flex-col justify-center items-center rounded-lg font-mono shadow-lg border-2 border-gray-200">
            <span className="flex">
                <h2 className={textinfo}>{weather.name}</h2>
                <img src={`https://flagsapi.com/${weather.sys.country}/flat/64.png`} alt={`${weather.name} flag`} className="w-8 h-8"/>
            </span>
            <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Clima"
                className="mx-auto w-[150px]"
            />
                <p className="text-indigo-200 font-bold text-3xl">{weather.weather[0].description}</p>
            <div className="flex flex-col justify-center items-start p-4">
                <p className={textinfo}><img src={TermoTemp} alt="Temp" className="w-6 h-6 mr-2"/>Temp.: {weather.main.temp}°C</p>
                <p className={textinfo}><img src={UpTemp} alt="Max" className="w-6 h-6 mr-2"/>Máx: {weather.main.temp_max}°C</p>
                <p className={textinfo}><img src={DownTemp} alt="Min" className="w-6 h-6 mr-2" />Min: {weather.main.temp_min}°C</p>
                <p className={textinfo}><img src={humidityIcon} alt="Umidade" className="w-6 h-6 mr-2"/>Umidade: {weather.main.humidity}%</p>
            </div>
        </div>
    )
}