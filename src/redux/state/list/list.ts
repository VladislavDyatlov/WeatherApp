import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { WeatherList } from '../../../model/model'

interface PayloadWeathers{
    daily: WeatherList[];
    error: string;
}

const initialState: PayloadWeathers = {
    daily: [],
    error: '',
}

export const newList = createSlice({
    name: 'list',
    initialState,
    reducers:{
        stateList: (state, action: PayloadAction<WeatherList[]>) =>{
            state.daily = action.payload;
        },
        listErrors: (state, action: PayloadAction<Error>) =>{
          state.error = action.payload.message;
        }
    }
})

export const {stateList, listErrors} = newList.actions;
export default newList.reducer;