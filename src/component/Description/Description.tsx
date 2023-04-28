import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { fetchWeather } from "../../redux/action/main/main";
import logo from '../../img/2584049.png';
import logos from '../../img/5168610.png'
import { onTimes } from "../../hook/date";

export const Description = () =>{

    const dispatch = useAppDispatch();
    const {weathers} = useAppSelector(weathers => weathers.weather);
    const {details} = useAppSelector(details => details.details);

    useEffect(() =>{
        dispatch(fetchWeather());
    }, [])

    return (
      <div className="description">
        <div className="description__flex">
          <div>
            <div className="description__text">
              <p>Подробности</p>
            </div>
            <div className="description__cont">
              <div className="description__block">
                <p>По ощущениям</p>
                <p className="texts">
                  {Math.ceil(
                    details.feels_like?.day
                      ? details.feels_like?.day
                      : weathers.current?.feels_like
                  )}
                  &#176;
                </p>
              </div>
              <div className="description__block">
                <p>Влажность</p>
                <p className="texts">
                  {details.humidity
                    ? details.humidity
                    : weathers.current?.humidity}
                  %
                </p>
              </div>
              <div className="description__block">
                <p>Видимость</p>
                <p className="texts">
                  {Math.ceil(
                    details.wind_gust
                      ? details.wind_gust
                      : weathers.current?.wind_gust
                  )}{" "}
                  км
                </p>
              </div>
              <div className="description__block">
                <p>Давление</p>
                <p className="texts">
                  {details.pressure
                    ? details.pressure
                    : weathers.current?.pressure}
                  ,00 мм
                </p>
              </div>
              <div className="description__block">
                <p>Ветер</p>
                <p className="texts">
                  {Math.ceil(
                    details.wind_speed
                      ? details.wind_speed
                      : weathers.current?.wind_speed
                  )}{" "}
                  м/с
                </p>
              </div>
            </div>
          </div>
          <div className="descriptions">
            <div className="description__blocks"></div>
            <div>
              <p>Восход</p>
              <div className="description__flexs">
                <img src={logo} width="35" height="35" />
                <p>
                  {onTimes(
                    details.sunrise ? details.sunrise : weathers.current?.sunrise
                  )}
                </p>
              </div>
            </div>
            <div>
              <p>Закат</p>
              <div className="description__flexs">
                <img src={logos} width="35" height="35" />
                <p>
                  {onTimes(
                    details.sunset ? details.sunset : weathers.current?.sunset
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}