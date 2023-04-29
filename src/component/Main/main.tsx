import {useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { fetchWeather } from "../../redux/action/main/main";

export const Main = () => {
 
    const dispatch = useAppDispatch();
    const {weathers} = useAppSelector(weather => weather.weather);
    const current = weathers.current?.weather.map((weather) => weather.description.charAt(0).toUpperCase() + weather.description.slice(1));
    // переменная current сделана для того чтобы слово автоматически начиналось с большой буквы

    useEffect(() => {
      dispatch(fetchWeather());
    }, []);

  return (
    <div className="index">
          <div className="index__block1">
            <p className="index__text">Москва</p>
          </div>
          <div className="index__block2">
            <img
              src={`https://openweathermap.org/img/wn/${weathers.current?.weather.map((res) => res.icon)}@2x.png`}
              width={80}
              height={80}
            />
            <p className="index__p">{Math.ceil(weathers.current?.temp)}<span className="span">o</span></p>  
          </div>
          <div className="index__block3">{current}</div>
    </div>
  );
};