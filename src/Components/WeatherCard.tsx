
export interface WeatherData {
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  sys :{
    country: string;
  }
  weather:{
    description: string;
    icon: string;
  }[];
}