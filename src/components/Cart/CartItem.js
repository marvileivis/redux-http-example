import classes from './CartItem.module.css';
import {useDispatch} from 'react-redux';
import {itemActions} from '../../store/itemSlice';
const CartItem = (props) => {
  //const { title, quantity, total, price } = props;
  const dispatch=useDispatch();
  const addItemHandler=()=>{
  
  dispatch(itemActions.addItem({id:props.item.id,name:props.item.title,price:props.item.price, quantity:props.item.quantity}));
  };
  const removeItemHandler=()=>{
  
    dispatch(itemActions.deleteItem({id:props.item.id,name:props.item.title,price:props.item.price, quantity:props.item.quantity}));
    };
  return (
    <li className={classes.item}>
      <header>
        <h3>{props.item.title}</h3>
        <div className={classes.price}>
          ${props.item.total}{' '}
          <span className={classes.itemprice}>(${props.item.price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.item.quantity}</span>
        </div>
        <div className={classes.quantity}>
          $ <span>{props.item.totalPrice}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
