import {createSlice,configureStore} from '@reduxjs/toolkit';//there is also createReducer, but createSlice is more powerful


const initialCartState={isShown:false,notification:null};
const cartSlice=createSlice({
    name:'cart',
    initialState: initialCartState,
    reducers:{
        showCart(state){
            
            state.isShown=!state.isShown;
        },
        showNotification(state, action){
            state.notification={
                status:action.payload.status,
                title:action.payload.title,
                 message:action.payload.message};
        }
    }
})
//action creator

export const cartActions=cartSlice.actions;
export default cartSlice.reducer;