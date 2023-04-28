import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { WeatherList } from '../../../model/model'

const initialState = {
    details: {} as WeatherList,
    error: '',
}

export const newDetails = createSlice({
  name: "details",
  initialState,
  reducers: {
    stateDetails: (state, action: PayloadAction<WeatherList>) => {
      state.details = action.payload;
    },
    detailsErrors: (state, action: PayloadAction<Error>) => {
      state.error = action.payload.message;
    },
  },
});

export const {stateDetails, detailsErrors} = newDetails.actions;
export default newDetails.reducer;