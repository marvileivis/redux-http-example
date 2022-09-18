import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = ({list}) => {
  const items=[{id:1, title: 'Laptop', quantity: 3, total: 18, price: 6, description:'A simple laptop' },{ id:2, title: 'Car', quantity: 1, total: 30, price: 30, description:'a nice car' }];

  return (
    
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {items.map((item)=>( <ProductItem 
          key={item.id}
          id={item.id}
          title={item.title} 
          quantity={item.quantity}
          total={item.total}
          price={item.price }
          description={item.description }
        />   )
            
        )}
      </ul>
    </section>
  );
};

export default Products;
