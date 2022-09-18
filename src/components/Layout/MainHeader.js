import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import {useSelector,useDispatch} from 'react-redux';
import {cartActions} from '../../store/cartSlice';

const MainHeader = (props) => {
  const dispatch=useDispatch();
  const showCartHandler=()=>{
 
    dispatch(cartActions.showCart());
  };
  return (
    <header className={classes.header}>
      <h1>Products Cart</h1>
      <nav>
        <ul>
          <li>
          <CartButton onClick={showCartHandler}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
