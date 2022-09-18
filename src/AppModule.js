import Cart from './components/Cart/Cart';
import Notifications from './components/UI/Notifications';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import React, {useEffect,Fragment} from 'react';
import {cartActions} from './store/cartSlice';
import {useSelector,useDispatch} from 'react-redux';
let inicial=true;
function App() {
  const dispatch=useDispatch(state=>state.cart);
  const item=useSelector(state=>state.item);
const notification=useSelector(state=>state.cart.notification);
  const isCartShown= useSelector(state=>state.cart.isShown)
  useEffect(()=>{
    dispatch(cartActions.showNotification({
      status:"pending",
      title:"Pending request",
      message:'the Request is been sent'
    }));

    const sendItemData=async ()=>{
     const response=await fetch('https://movieapp-ecc48-default-rtdb.firebaseio.com/Products.json',{
        method:'PUT',
        body:JSON.stringify(item),
      });
      if(!response.ok){
       
        throw new Error('sending item data failed');
      }

      //const responseData= await response.json();
      dispatch(cartActions.showNotification({
        status:"success",
        title:"Success!",
        message:'Sent data successfully'
      }));
        }
        //the next function returns a promiss, that is why can can call catch
        if(inicial){
          inicial=false;
          return;
        }
      sendItemData().catch(error=>{
        dispatch(cartActions.showNotification({
          status:"error",
          title:"Error!",
          message:'sending c data failed'
        }));

      });
      },[item]);
    

  return (
    <React.Fragment>
     {notification && <Notifications 
     status={notification.status}
     title={notification.title}
     message={notification.message}
     /> } 
       <Layout>
          {isCartShown &&<Cart />}
      <Products />
    </Layout>
    </React.Fragment>
   
  );
}

export default App;
