import { AppDispatch } from "../..";
import axios from "axios";
import { newList, listErrors } from "../../state/list/list";
import { WeatherLists } from "../../../model/model";

export const fetchList = () =>{
  return async (dispatch: AppDispatch) => {
    try {
      const res = await axios.get<WeatherLists>(
        `https://api.openweathermap.org/data/2.5/onecall?lat=55&lon=33&exclude=hourly,minutely,alerts&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=ru`
      );
      dispatch(newList.actions.stateList(res.data.daily));
    } catch (e) {
      dispatch(listErrors(e as Error));
    }
  };
}