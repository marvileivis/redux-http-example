import classes from './CartButton.module.css';
import {useSelector} from 'react-redux';
const CartButton = (props) => {
  const TotalAmount=useSelector(state=>state.item.totalQuantity);

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{TotalAmount}</span>
    </button>
  );
};

export default CartButton;
