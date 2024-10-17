//Purpose: Make page that shows Events as a calendar

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";
import { deleteEvent, getAllEvents } from "../../Services/EventsService";
import "./Events.css";

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

  const handleDelete = async (eventId) => {
    try {
      await deleteEvent(eventId);
      setEvents(events.filter(event => event.id !== eventId));
    } catch (err) {
      setError("Failed to delete event.");
    }
  };

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>{error}</div>;









  const Events = ({ events }) => {
    const [cartItems, setCartItems] = useState([]);
    const history = useHistory();
  };
  
    const addToCart = (event) => {
      setCartItems([...cartItems, event]);
      alert(`${event.name} added to cart!`); // Notify user
    };
  
    const handleCheckout = () => {
      // Store cart items in local storage or pass them to checkout via context
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      history.push('/checkout'); // Redirect to checkout page
    };











  return (
    <div className="events-test">
      <h2 className="title_events">UpcomingEvents</h2>
      <Row className="flex-row">
        {events.map((event) => (
          <Col key={event.id} xs="12" md="6" lg="4"> {/* Responsive columns */}
            <Card className="event-card">
              <CardBody className="d-flex flex-row align-items-center">
                <img
                  src={event.picture}
                  alt={`${event.artistName} event`}
                  className="event-image"
                />
                <div className="ml-3"> {/* Margin left for spacing */}
                  <h2>{event.artistName}</h2>
                  <CardSubtitle>{event.supportingArtist}</CardSubtitle>
                  <p>Price: ${event.price}</p>
                  <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                  <Link to={`/event/${event.id}/editEvent`}>
                    <Button color="primary" size="sm" style={{ margin: 5 }}>
                      Edit
                    </Button>
                  </Link>
                  <Button
                    color="danger"
                    size="sm"
                    style={{ margin: 5 }}
                    onClick={() => handleDelete(event.id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <Link to="/event/newEvent">
        <button className="button">Create New Event</button>
      </Link>
    </div>
  );
};























// import React from "react";
// import "./Events.css";
// import { useState } from "react";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";
// import { deleteEvent, getAllEvents } from "../../Services/EventsService";

// export const Calendar = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     getAllEvents().then((eventsArray) => {
//         setEvents(eventsArray)
//     })
//   }, [])

// //   useEffect(() => {
// //         document.body.style.backgroundImage = `url(https://i.pinimg.com/474x/ba/c1/11/bac111ba4d24cbc8e7caa9c762f4903d.jpg)`
// //       } , [])

//       const handleDelete = (event) => {
//             deleteEvent(event.id).then(() => {
//               getAllEvents().then((eventsArray) => {
//                 setEvents(eventsArray);
//               });
//             });
//           };
      

//   return (
//     <div className="events-test">
//     <div className="events">
//       <div>
//       <h2 className="title_events">Event</h2>
//         <Row className="flex-row">
//           {events.map((event) => {
//             return (
//               <Col key={event.id}>
//                 <Card
//                   style={{
//                     width: "12rem",
//                     padding: "1em",
//                     margin: 5,
//                   }}
//                 >
//                   <h2>{event.artistName}</h2>
//                   <p>{event.supportingArtist}</p>
//                   <p>{event.price}</p>
//                   <p>{event.date}</p>
//                   <img src={event.picture} />
//                   {/* <img className="event-images" src={event.Picture} alt={event.ArtistName}/> */}
//                   <Link to={`/event/${event.id}/editEvent`}>
//                     <Button color="primary" size="sm" style={{ margin: 5 }}>
//                       Edit
//                     </Button>
//                   </Link>
//                   <Button
//                     color="danger"
//                     size="sm"
//                     style={{ margin: 5 }}
//                     onClick={() => handleDelete(event.id)}>
//                     Delete
//                   </Button>
//                 </Card>
//               </Col>
//             );
//           })}
//         </Row>
//       </div>
//     </div>
//     <div>
//       <Link to="/event/newEvent">
//         <button className="button">Create New Event</button>
//       </Link>
//     </div>
//   </div>
//   );
// };






