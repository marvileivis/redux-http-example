import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';
//const items=[{title: 'Laptop', quantity: 3, total: 18, price: 6 },{ title: 'Car', quantity: 1, total: 30, price: 30 }];

const Cart = (props) => {

  
  const isCartShown= useSelector(state=>state.cart.isShown);
  
  const items=useSelector(state=>state.item.items);
 

  return (//name:newItem.name,id:newItem.id, price:newItem.price, quantity:1, totalPrice:newItem.price
    <div>
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
      {items.map((item)=>(
             <CartItem key={item.id} item={{
              id:item.id,
             title:item.name,
             quantity:item.quantity,
             total:item.total,
             price:item.price ,
             totalPrice:item.totalPrice}}
             />
          )
            
          )
        }
     
      </ul>
    </Card>
     
    </div>
   
  );
};

export default Cart;
