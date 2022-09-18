  import Cart from './components/Cart/Cart';
import Notifications from './components/UI/Notifications';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import React, {useEffect,Fragment} from 'react';
import {cartActions} from './store/cartSlice';
import {useSelector,useDispatch} from 'react-redux';
import {sendItemData,fetchItemData} from './store/itemActions';
let isInitial=true;
function App() {
  const dispatch=useDispatch(state=>state.cart);
  const item=useSelector(state=>state.item);
const notification=useSelector(state=>state.cart.notification);
  const isCartShown= useSelector(state=>state.cart.isShown);
  useEffect(()=>{
dispatch(fetchItemData());
  },[dispatch]);
  useEffect(()=>{
    if(isInitial){
      isInitial=false;
return;
    }
    if(item.changed){
      dispatch(sendItemData(item));
    }
   
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
