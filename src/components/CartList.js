import React from 'react';
import {List, Avatar, Button} from 'antd';
import {itemTotal} from '../methods/calculate.js';

function CartList(props) {
  const {cartItems, onAdd, onDelete} = props;

  return (
    <List itemLayout="horizontal" dataSource={ cartItems } renderItem={ (item) => (
      <List.Item actions={ [<Button onClick={ (e) => onDelete(item) }>-</Button>,
        <Button onClick={ (e) => onAdd(item) }>+</Button>] }>
          <List.Item.Meta
          avatar={ <Avatar src={ item.image }/> }
          title={ item.name }
          description={ 'Quantity: ' + item.qty + '  ' + item.purchaseMode}
          />
        <div style={{width: '30px'}}>${ itemTotal(item) }</div>
      </List.Item>
    ) }/>
  );
}

export default CartList;