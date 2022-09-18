
import {configureStore} from '@reduxjs/toolkit';//there is also createReducer, but createSlice is more powerful
import itemReducer from './itemSlice';
import cartReducer from './cartSlice';

const store=configureStore({
    //reducer:counterSlice.reducer
    reducer:{item:itemReducer,cart:cartReducer
//object that maps reducers
    }
});//expects a configuration object



export default store;