import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

export const Checkout = ({cart, setCart}) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0)
 
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);



  const handlePurchase = () => {
    // Logic for completing the purchase goes here
    alert('Purchase complete!');
    localStorage.removeItem('cartItems'); // Clear cart after purchase
  };


  let Price = 0 

const CreateTotal = (price) => {
    let newPrice = Price + price
    Price = newPrice
} 


  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map((item, index) => {
            CreateTotal(item.price)
            if(item.eventId === null){
            return(
          <div key={index}>
            <h3>{item.itemName}</h3>
            <p>Price: ${item.price}</p>
            <img src={item.picture} alt={item.itemName} style={{ width: '200px', height: 'auto' }} />
          </div>
        )}
            else if(item.merchId === null){
                return (
                <div key={index}>
                <h3>{item.itemName}</h3>
                <p>Price: ${item.price}</p>
                <img src={item.picture} alt={item.itemName} style={{ width: '200px', height: 'auto' }} />
              </div>
        )}
        })}
      </ul>
      <h3>Total: ${Price}</h3>
      <Button color="primary" onClick={handlePurchase}>Complete Purchase</Button>
    </div>
  );
};


