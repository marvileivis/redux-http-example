import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useSelector,useDispatch} from 'react-redux';
import {itemActions} from '../../store/itemSlice';
const ProductItem = (props) => {
  const dispatch=useDispatch();
const addItemHandler=()=>{

dispatch(itemActions.addItem({id:props.id,name:props.title,price:props.price, quantity:props.quantity}));
};
  const { title, price, description } = props;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{props.title}</h3>
          <div className={classes.price}>${props.price.toFixed(2)}</div>
        </header>
        <p>{props.description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
