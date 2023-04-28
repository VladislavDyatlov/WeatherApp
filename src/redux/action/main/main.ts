import { AppDispatch } from "../..";
import axios from "axios";
import { newSlice, stateErrors } from "../../state/main/main";
import { Weathers } from "../../../model/model";

export const fetchWeather = () =>{
  return async (dispatch: AppDispatch) => {
    try {
      const res = await axios.get<Weathers>(
        `https://api.openweathermap.org/data/2.5/onecall?lat=55&lon=33&exclude=hourly,minutely,alerts&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=ru`
      );
      dispatch(newSlice.actions.stateWeather(res.data));
    } catch (e) {
      dispatch(stateErrors(e as Error));
    }
  };
}