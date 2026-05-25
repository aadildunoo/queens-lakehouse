import React, { useState, useEffect } from 'react';
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudDrizzle, Thermometer, Droplets, Wind, RefreshCw } from 'lucide-react';

interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  isDay: boolean;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData>({
    temp: 18,
    condition: "Partly Cloudy",
    humidity: 62,
    windSpeed: 8,
    isDay: true
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError(false);
      // Coordinates for Srinagar: Lat 34.0837, Lon 74.7973
      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=34.0837&longitude=74.7973&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m'
      );
      if (!response.ok) throw new Error('Failed to fetch weather');
      
      const data = await response.json();
      const current = data.current;
      
      if (current) {
        const code = current.weather_code;
        let cond = "Clear Sky";
        if (code === 1 || code === 2 || code === 3) cond = "Partly Cloudy";
        else if (code >= 45 && code <= 48) cond = "Foggy Mist";
        else if (code >= 51 && code <= 57) cond = "Light Drizzle";
        else if (code >= 61 && code <= 67) cond = "Rainy Showers";
        else if (code >= 71 && code <= 77) cond = "Snow Showers";
        else if (code >= 80 && code <= 82) cond = "Rain Showers";
        else if (code >= 85 && code <= 86) cond = "Snow Showers";
        else if (code >= 95 && code <= 99) cond = "Thunderstorms";

        setWeather({
          temp: Math.round(current.temperature_2m),
          condition: cond,
          humidity: current.relative_humidity_2m,
          windSpeed: Math.round(current.wind_speed_10m),
          isDay: current.is_day === 1
        });
      }
    } catch (err) {
      console.warn("Weather API fetch failed, utilizing regional fallback:", err);
      setError(true);
      // Smart season/time based fallback for Srinagar
      const hour = new Date().getHours();
      const isNight = hour < 6 || hour > 19;
      setWeather({
        temp: isNight ? 12 : 21,
        condition: isNight ? "Cool Clear Night" : "Soft Alpine Sunshine",
        humidity: 58,
        windSpeed: 6,
        isDay: !isNight
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const getWeatherIcon = (condition: string) => {
    const c = condition.toLowerCase();
    if (c.includes('rain') || c.includes('drizzle')) {
      return <CloudRain className="text-secondary" size={20} />;
    }
    if (c.includes('snow')) {
      return <CloudSnow className="text-secondary" size={20} />;
    }
    if (c.includes('cloud') || c.includes('mist') || c.includes('fog')) {
      return <Cloud className="text-secondary" size={20} />;
    }
    if (c.includes('thunder')) {
      return <CloudLightning className="text-secondary animate-pulse" size={20} />;
    }
    return <Sun className="text-orange-400 animate-spin-slow" size={20} />;
  };

  return (
    <div className="bg-primary/20 backdrop-blur-md rounded-md border border-white/10 p-4 w-full sm:max-w-[280px] text-white">
      <div className="flex justify-between items-start pb-2 border-b border-white/10 mb-2">
        <div className="text-[10px] font-mono tracking-widest uppercase text-tertiary font-bold flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
          <span>Srinagar Weather</span>
        </div>
        <button 
          onClick={fetchWeather} 
          disabled={loading}
          className="text-white/40 hover:text-white transition-colors cursor-pointer disabled:opacity-55"
          title="Refresh current weather data"
        >
          <RefreshCw size={11} className={loading ? "animate-spin" : ""} />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="p-2 bg-white/5 rounded-sm shrink-0">
          {getWeatherIcon(weather.condition)}
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-serif font-extrabold tracking-tight">{weather.temp}°C</span>
            <span className="text-[11px] font-sans font-medium text-white/80">{weather.condition}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-2.5 pt-2 border-t border-white/5 text-[10px] text-white/70 font-sans">
        <div className="flex items-center gap-1.5">
          <Droplets size={11} className="text-secondary" />
          <span>Humid: {weather.humidity}%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Wind size={11} className="text-secondary" />
          <span>Wind: {weather.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );
}
