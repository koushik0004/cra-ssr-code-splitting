import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listItemsAction } from '../store/cartReducer';


const CartCounterList = () => {
  const itenmCount = useSelector((state) => state.cart.quantity);
  const cartItems = useSelector((state) => state.cart.items)
  // Get dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    const updateCartJSON = {
      message: 'cart item updated',
      items: [
        {itemName: 'gun', unit: 10, weight: `30gm`, price: `$90.02`},
        {itemName: 'moreover', unit: 20, weight: `50gm`, price: `$200.70`}
      ],
      quantity: 30,
    };
    dispatch(listItemsAction(updateCartJSON));
  }, [])

  return (
    <div className="cart-items-sections">
      <div className="all-items">
        <ul className="items-wrapper">
          {Array.isArray(cartItems) && cartItems.length > 0 && cartItems.map((single, indx) => (
            <li key={`cart-pdt-${indx}`}>{single.itemName} - {single.unit}</li>
          ))}
        </ul>
      </div>
      <div className="total-item-counter">
        Items total: {itenmCount}
      </div>
    </div>
  )
};


export default CartCounterList;

