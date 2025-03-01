import { useState } from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

interface WeatherFormProps {
  onSearch: (city: string) => void;
  loading: boolean;
}

const WeatherForm = ({ onSearch, loading }: WeatherFormProps) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
    setCity("");
  };

  return (
    <div className="flex flex-col justify-center p-4">
      <form onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold font-mono">Previsão do Tempo</h2>
        <div className="relative flex flex-row">
          <input
            className="flex-1 p-2 border rounded-lg font-mono text-lg w-[350px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Digite o nome da Cidade..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white p-2 rounded-lg flex items-center hover:bg-blue-600 disabled:bg-blue-300 m-2 font-mono"
          >
            <MagnifyingGlassIcon className="w-5 h-5 mr-2" /> {/* Ícone de busca */}
            {loading ? "Carregando..." : "Buscar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WeatherForm;
