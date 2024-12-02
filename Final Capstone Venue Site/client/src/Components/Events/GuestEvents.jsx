//Purpose: for user view (no crud)

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, Col, Row, Button } from "reactstrap";
import { getAllEvents } from "../../Services/EventsService";
import "./Events.css";

export const GuestCalendar = ({cart, setCart}) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    document.body.style.backgroundImage = `url(https://i.pinimg.com/474x/2d/76/47/2d76478455feeda973eb295263b2d0dc.jpg)`

    const fetchEvents = async () => {
      try {
        const eventsArray = await getAllEvents();
        
        // Sort events by date
        const sortedEvents = eventsArray.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        setEvents(sortedEvents);
      } catch (err) {
        setError("Failed to load events.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>{error}</div>;


  const AddToCart = (item) => {
    const cartCopy = [ ...cart ];
    cartCopy.push({eventId : item.id, picture : item.picture, artistName : item.artistName, price : item.price, merchId : null})
    setCart(cartCopy);
  }

  const addedToCart = (item) => {
    alert("Woohoo! You have added tickets to your cart!"); // Show pop-up
  };
   

  return (
    <div className="events-test">
      <h2 className="title_events">Upcoming Events</h2>
      <Row className="flex-row">
        {events.map((item) => (
          <Col key={item.id} xs="12" md="6" lg="4"> {/* Responsive columns */}
            <Card className="event-card">
              <CardBody className="d-flex flex-row align-items-center" style={{ height: '100%' }}>
                <img
                  src={item.picture}
                  alt={`${item.artistName} event`}
                  className="event-image"
                />
                <div className="ml-3"> {/* Margin left for spacing */}
                  <h2>{item.artistName}</h2>
                  <CardSubtitle>{item.supportingArtist}</CardSubtitle>
                  <p>Price: ${item.price}</p>
                  <p>Date: {new Date(item.date).toLocaleDateString()}</p>
                </div>
                <div className="cart-button">
                  <Link >
                    <Button onClick={()=>{AddToCart(item); addedToCart() }} color="primary" size="med" style={{ margin: 5, marginTop:'auto'}}>
                      Add to Cart
                    </Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <Link to="/Checkout">
        <button className="button">Go to Cart</button>
      </Link>
    </div>
  );
};
