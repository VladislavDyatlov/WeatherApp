export interface Weathers{
    current: WeatherArray;
}

export interface WeatherLists{
    daily: WeatherList[];
}

interface WeatherArray{
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    wind_speed: number;
    sunrise: number;
    sunset: number;
    humidity: number;
    wind_gust: number;
    weather: Weather[];
}

export interface WeatherList{
    dt: number;
    feels_like: {
        day: number;
        night: number;
    };
    pressure: number;
    wind_speed: number;
    sunrise: number;
    sunset: number;
    humidity: number;
    wind_gust: number;
    temp: {
        day: number;
        night: number;
    };
    weather: Weather[];
}

interface Weather{
    id: number;
    main: string;
    description: string;
    icon: string;
}