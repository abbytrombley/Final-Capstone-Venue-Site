import React, { useEffect, useState } from 'react';

const Checkout = ({cart, setCart}) => {
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
          <li key={index}>
            <h3>{item.itemName}</h3>
            <p>Price: ${item.price}</p>
            <img src={item.picture} alt={item.itemName} />
          </li>
        )}
            else if(item.merchId === null){
                return (
                <li key={index}>
                <h3>{item.itemName}</h3>
                <p>Price: ${item.price}</p>
                <img src={item.picture} alt={item.itemName} />
              </li>
        )}
        })}
      </ul>
      <h3>Total: ${Price}</h3>
      <button onClick={handlePurchase}>Complete Purchase</button>
    </div>
  );
};

export default Checkout;
