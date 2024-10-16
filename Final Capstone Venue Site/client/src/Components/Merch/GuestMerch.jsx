import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import { getAllMerch } from "../../Services/MerchService";
import "./Merch.css";

export const GuestMerch = () => {
  const [merch, setMerch] = useState([]);

  useEffect(() => {
    getAllMerch().then((merchArray) => {
      setMerch(merchArray);
    });
  }, []);

  useEffect(() => {
    document.body.style.backgroundImage = `url(https://i.pinimg.com/564x/aa/44/53/aa4453ce6306d2aa24bd1eecb5a5060d.jpg`;
  }, []);

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
                <p>Quantity: {item.quantity}</p>
                <p>{item.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <Link to="/merch">
          <button className="button">Back to Merch List</button>
        </Link>
      </div>
    </div>
  );
};




