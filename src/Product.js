import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }

  const decreaseQuantity = () => {
    if(quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="product" key={props.id}>
      <Link to={`/products/${props.name}`}>
        <img
          className="product-image"
          src={props.image}
          alt={props.name}
        />
      </Link>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <h4>{props.price}</h4>
      <div className="Product-quantity">
        <button className='button-add' onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button className='button-delete' onClick={increaseQuantity}>+</button>
      </div>
      <button className='button-add'>Add to Cart</button>
    </div>
  )
  
}

export default Product;