function calculate(cartItems) {
  let sum = 0
  for (let item of cartItems){
    sum = sum + item.qty
  }
  return sum
}

function itemTotal(item) {
  let result = 0;
  if (item.purchaseMode === 'Subscribe') {
    result = (item.qty * item.price2).toFixed(2) + '/mo.'
  }else {
    result = (item.qty * item.price).toFixed(2)
  }
  return result
}

function subTotal(items) {
  let result = 0
  for (let item of items){
    if (item.purchaseMode === 'Subscribe') {
      result = result + (item.qty * item.price2)
    }else {
      result = result + (item.qty * item.price)
    }
  }
  return result.toFixed(2)
}

export  {calculate, itemTotal, subTotal}