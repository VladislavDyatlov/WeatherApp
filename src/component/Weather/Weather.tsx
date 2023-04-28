import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { fetchList } from "../../redux/action/list/list";
import { onTime } from "../../hook/date";
import { detailsErrors, stateDetails } from "../../redux/state/details/details";

export const Weather = () =>{

    const dispatch = useAppDispatch();
    const {daily} = useAppSelector(list => list.list);

    useEffect(() =>{
        dispatch(fetchList());
    },[])

    const onSubmit = (res: any) =>{
      try{
        dispatch(stateDetails(res));
      } catch(e){
        detailsErrors(e as Error);
      }
      // функция для отправки в redux подробной информации о погоде на конкретно выбранный день
    }
    return (
      <div className="weather">
        <div className="weather__text">
          <p>По дням</p>
        </div>
        <div className="weather__flex">
          {daily.slice(0,7).map((res) => (
            <div className="weather__block" onClick={() => onSubmit(res)}>
              <div className="weather__style">
                <p>{onTime(res.dt)}</p>
                <img
                  src={`https://openweathermap.org/img/wn/${res.weather.map(
                    (i) => i.icon
                  )}@2x.png`}
                  width="40px"
                  height="40px"
                />
                <p className="weather__p">
                  {Math.ceil(res.temp.day)}
                  &#176;
                  <span className="weather__min">
                    {Math.ceil(res.temp.night)}&#176;
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}