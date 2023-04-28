import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Weathers } from '../../../model/model'

interface PayloadWeather{
    weathers: Weathers;
    error: string;
}

const initialState: PayloadWeather = {
    weathers: {} as Weathers,
    error: '',
}

export const newSlice = createSlice({
    name: 'weather',
    initialState,
    reducers:{
        stateWeather: (state, action: PayloadAction<Weathers>) =>{
            state.weathers = action.payload;
        },
        stateErrors: (state, action: PayloadAction<Error>) =>{
            state.error = action.payload.message
        }
    }
})

export const {stateWeather, stateErrors} = newSlice.actions;
export default newSlice.reducer;