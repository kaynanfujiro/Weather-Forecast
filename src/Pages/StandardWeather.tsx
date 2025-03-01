interface StandardWeatherProps {
    onSearch: (city: string) => void;
}

const StandardButton = "bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 m-2";

export const StandardWeather = ({ onSearch }: StandardWeatherProps) => {
    return (
        <div className="flex space-x-4 mb-4">
            <button
                onClick={() => onSearch("São Paulo")}
                className={StandardButton}
            >
                São Paulo
            </button>
            <button
                onClick={() => onSearch("Campinas")}
                className={StandardButton}
            >
                Campinas
            </button>
            <button
                onClick={() => onSearch("Mogi Mirim")}
                className={StandardButton}
            >
                Mogi Mirim
            </button>
        </div>
    );
};
