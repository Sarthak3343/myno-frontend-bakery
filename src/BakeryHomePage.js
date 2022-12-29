import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import ApplePie from './Images/Apple-Pie.png';
import GlazedDoughnut from './Images/Glazed-Doughnut.jpg';
import BlueberryCheeseCake from './Images/Blueberry-CheeseCake.jpg';
import ChocoChipCookie from './Images/ChocoChip-Cookie.jpg';
import './BakeryHomePage.css';

const BakeryHomePage = () => {
  const [products, ] = useState([
    {
      id: 1,
      name: 'Chocolate Chip Cookies',
      description: 'Our classic chocolate chip cookies are made with real butter and chocolate chips.',
      image: ChocoChipCookie,
      price: 25.00,
      inCart: false,
    },
    {
      id: 2,
      name: 'Apple Pie',
      description: 'Our classic apple pie is made with fresh, crisp apples and a buttery, flaky crust.',
      image: ApplePie,
      price: 30.00,
      inCart: false,
    },
    {
      id: 3,
      name: 'Blueberry Cheesecake',
      description: 'A smooth and tangy base that balances with the sweetness of an oozing blueberry topping.',
      image: BlueberryCheeseCake,
      price: 20.00,
      inCart: false,
    },
    {
      id: 4,
      name: 'Glazed Donuts',
      description: 'These glazed donuts are soft, fluffy, and deliciously sweet! Must Try!!',
      image: GlazedDoughnut,
      price: 15.00,
      inCart: false,
    },
  ]);

  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const addToCart = (id) => {
    const product = products.find((product) => product.id === id);
    setCart([...cart, product]);
    setCartTotal(cartTotal + product.price);
  };

  const deleteFromCart = (id) => {
    const product = products.find((product) => product.id === id);
    const cartPresent = cart.find((product) => product.id === id);
    setCart(cart.filter((product) => product.id !== id));
    if(cartPresent && cartTotal - product.price >= 0) setCartTotal(cartTotal - product.price);
  };

  const handleCheckout = () => {
    const checkoutData = {
      products: cart,
      total: cartTotal
    }
    console.log('Checkout successfully completed! Your items are: ', checkoutData);
  };

  useEffect(() => {
    const inCartProducts = products.filter((product) => product.inCart);
    setCart(inCartProducts);
  }, []);

  return (
    <BrowserRouter>
      <div className="bakery">
        <h1>Welcome to the Bakery!</h1>
        <div className="products-container">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <Link to={`/products/${product.name}`}>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
              </Link>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h4>${product.price}</h4>
              <div className="actions">
              <button
                    onClick={() => addToCart(product.id)}
                    className="button-add"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => deleteFromCart(product.id)}
                    className="button-delete"
                  >
                    Delete from Cart
                  </button>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout">
          <button onClick={handleCheckout} className="button-checkout">
            Checkout
          </button>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default BakeryHomePage;
