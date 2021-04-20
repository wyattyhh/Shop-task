import React, {useState, useEffect} from 'react';
import './ShoppingPage.css'
import ItemBlock from '../components/ItemBlock';
import data from '../data'
import NavBar from '../components/NavBar';

function ShoppingPage(props) {
  const {items} = data
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    //pass cart items
    if (props.location.state){setCartItems(props.location.state.cartItems)
    }
  }, [])

  const onAdd = (item) => {
    // check if item exist and distinguish the mode of purchase
    const exist = cartItems.find((x) => x.id === item.id & x.purchaseMode === item.purchaseMode)
    if (exist) {
      // if item exist, increase quantity
      setCartItems(cartItems.map((x) => x.id === item.id ? {...exist, qty: exist.qty + 1} : x ))
    } else {
      console.log(1);
      setCartItems([...cartItems, {...item, qty: 1}])
    }
    console.log(cartItems);
  }

  return (
    <div>
      <NavBar cartItems={cartItems}/>
      <div className="home">
        {items.map((item) => (<ItemBlock key={ item.id } item={ item } onAdd={onAdd}/>))}
      </div>
    </div>

  );
}

export default ShoppingPage;