import { configureStore } from "@reduxjs/toolkit";
import newSlice from "./state/main/main";
import newList  from "./state/list/list";
import newDetails from "./state/details/details";

export const store = configureStore({
    reducer:{
        weather: newSlice,
        list: newList,
        details: newDetails,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch