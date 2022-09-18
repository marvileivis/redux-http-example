import {createSlice,configureStore} from '@reduxjs/toolkit';//there is also createReducer, but createSlice is more powerful


const initialItemState={changed:false,items:[],totalQuantity:0};
const itemSlice=createSlice({
    name:'item',
    initialState: initialItemState,
    reducers:{
      replaceCart(state,action){
        state.totalQuantity=action.payload.totalQuantity;
        state.items=action.payload.items;
      },
        addItem(state,action){
            const newItem=action.payload;
            const existingItem=state.items.find(item=>item.id===newItem.id);
            state.totalQuantity=state.totalQuantity+1;
            state.changed=true;
            if(existingItem){
                
                    existingItem.quantity++;
                    existingItem.totalPrice=existingItem.totalPrice+newItem.price;
            } else{
                state.items.push({name:newItem.name,id:newItem.id, price:newItem.price, quantity:1, totalPrice:newItem.price});
                

            }
         
        },
        deleteItem(state,action){
            const newItem=action.payload;
       const newId=state.items.find(item=>item.id===newItem.id);
       newId.quantity--;
       state.changed=true;
       newId.totalPrice-=newId.price;
       state.totalQuantity=state.totalQuantity-1;
       if(newId.quantity>0){
//const index=state.items.findIndex(newId);
//state.items[index]=newId;
       }
       else{
        state.items=state.items.filter(item=>item.id!==newItem.id);
       
       }
      
        }
        ,
        showItems(state){
       return state.items;
        }
    }
})
//action creator

export const itemActions=itemSlice.actions;
export default itemSlice.reducer;