import React, {useEffect, useState} from 'react';
import './CartPage.css'
import NavBar from '../components/NavBar';
import CartList from '../components/CartList';
import CheckoutBlock from '../components/CheckoutBlock';
import {calculate} from '../methods/calculate';

function CartPage(props) {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    //pass cart items
    if (props.location.state) {
      setCartItems(props.location.state.cartItems);
    }
  }, []);

  const onAdd = (item) => {
    // check if item exist and distinguish the mode of purchase
    const exist = cartItems.find((x) => x.id === item.id & x.purchaseMode === item.purchaseMode);
    if (exist) {
      // if item exist, increase quantity
      setCartItems(cartItems.map((x) => x.id === item.id & x.purchaseMode === item.purchaseMode? {...exist, qty: exist.qty + 1} : x));
    } else {
      console.log(1);
      setCartItems([...cartItems, {...item, qty: 1}]);
    }
    console.log(cartItems);
  };

  const onDelete = (item) =>  {
    console.log(1);
    if (item.qty > 0) {
      setCartItems(cartItems.map((x) => x.id === item.id & x.purchaseMode === item.purchaseMode ? {...x, qty: x.qty - 1} : x));
      item.qty = item.qty - 1
    } else {
      for (let [index, x] of cartItems.entries()) {
        if (x.id ===item.id) {
          setCartItems(cartItems.splice(index,1))
        }
      }
    }
  }

  return (
    <div>
      <NavBar cartItems={ cartItems }/>
      <h1>Cart Items</h1>
      <div>{ calculate(cartItems) === 0 ? <div>Empty.</div> :
        <div className="main">
        <div className="left-com">
        <CartList cartItems={ cartItems } onAdd={ onAdd } onDelete={onDelete}/>
        </div>
        <CheckoutBlock cartItems={cartItems}/>
        </div>
      }</div>



    </div>

  );
}

export default CartPage;