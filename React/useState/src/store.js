import { configureStore } from "@reduxjs/toolkit";
import counterslice from './counterSlice';

const store = configureStore({
    reducer : {
        counter : counterslice,
    },
})

export default store;