import React from 'react';
import './ItemBlock.css';
import {Select} from 'antd';
import {Button} from 'antd';

const {Option} = Select;



function ItemBlock(props) {
  const {item, onAdd} = props;

  function handleChange(value) {
    item.purchaseMode = value
  }

  return (
    <div className="container">
      <div className="item-name">{ item.name }</div>
      <img className="item-image"
           src={ item.image } alt=""/>
      <div className="select"><Select defaultValue="Subscribe" onChange={ handleChange }>
        <Option value="Subscribe">Subscribe - ${ item.price2 }/month</Option>
        <Option value="One time purchase">One time purchase- ${ item.price }</Option>
      </Select></div>
      <div className="button"><Button type="primary" onClick={(e) => onAdd(item)}>Add to Cart</Button>
      </div>
    </div>
  );
}

export default ItemBlock;