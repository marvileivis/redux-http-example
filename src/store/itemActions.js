import {itemActions} from './itemSlice'; 
import {cartActions} from './cartSlice';
export const fetchItemData=()=>{
    return async dispatch=>{
        const fetchData=async()=>{
const response=await fetch('https://movieapp-ecc48-default-rtdb.firebaseio.com/Products.json');
if(!response.ok){
    throw new Error('Could not fetch cart data');
}
const data=await response.json();
return data;
        };
        try{
            const itemData=await fetchData();
            dispatch(itemActions.replaceCart({
                items:itemData.items||[],
                totalQuantity:itemData.totalQuantity,
            }));
        }
        catch(error){
            dispatch(cartActions.showNotification({
                status:"error",
                title:"Error!",
                message:'Fetcching cart data failed'
              }));
         }
    };
};
export const sendItemData=(itemData)=>{
    // return {type:'' ,payload:...};
    //function that returns other functions
     return async (dispatch)=>{
   
        dispatch(
         cartActions.showNotification({
            status:"pending",
            title:"Pending request",
            message:'the Request is been sent',
           }));
          const sendRequest=async ()=>{
             const response=await fetch('https://movieapp-ecc48-default-rtdb.firebaseio.com/Products.json',{
                 method:'PUT',
                 body:JSON.stringify(itemData),
               });
               if(!response.ok){
                
                 throw new Error('sending item data failed');
               }
          };
          try{
             await sendRequest();
             dispatch(cartActions.showNotification({
                 status:"success",
                 title:"Success!",
                 message:'Sent data successfully'
               }));
          }
          catch(error){
             dispatch(cartActions.showNotification({
                 status:"error",
                 title:"Error!",
                 message:'sending c data failed'
               }));
          }
         
      
 };
     
 }