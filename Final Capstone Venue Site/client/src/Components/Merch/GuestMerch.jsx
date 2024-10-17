import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "reactstrap";
import { getAllMerch } from "../../Services/MerchService";
import "./Merch.css";

export const GuestMerch = ({cart, setCart}) => {
  const [merch, setMerch] = useState([]);

  useEffect(() => {
    getAllMerch().then((merchArray) => {
      setMerch(merchArray);
    });
  }, []);

  useEffect(() => {
    document.body.style.backgroundImage = `url(https://i.pinimg.com/564x/aa/44/53/aa4453ce6306d2aa24bd1eecb5a5060d.jpg`;
  }, []);

  const AddToCart = (item) => {
    const cartCopy = [ ...cart ];
    cartCopy.push({merchId : item.id, picture : item.picture, itemName : item.itemName, price : item.price, eventId : null})
    setCart(cartCopy);
  }
   




  return (
    <div className="merch-test">
      <div className="merch">
        <h2 className="title_merch">MERCH</h2>
        <Row className="flex-row">
          {merch.map((item) => (
            <Col key={item.id}>
              <Card style={{ width: "12rem", padding: "1em", margin: 5 }}>
                <h2>{item.itemName}</h2>
                <img src={item.picture} alt={item.itemName} />
                <p>Price: ${item.price}</p>
                {/* <p>Quantity: {item.quantity}</p> */}
                <p>{item.description}</p>
                <div>
                  <Link >
                    <Button onClick={()=>AddToCart(item)} color="primary" size="sm" style={{ margin: 5 }}>
                      Add to Cart
                    </Button>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <Link to="/Checkout">
          <button className="button">Go to Cart</button>
        </Link>
      </div>
    </div>
  );
};





