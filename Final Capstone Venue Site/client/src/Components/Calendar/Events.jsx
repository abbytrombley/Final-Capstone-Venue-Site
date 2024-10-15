//Purpose: Make page that shows Events as a calendar

import React from "react";
import "./Events.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";
import { deleteEvent, getAllEvents } from "../../Services/EventsService";

export const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents().then((eventsArray) => {
        setEvents(eventsArray)
    })
  }, [])

//   useEffect(() => {
//         document.body.style.backgroundImage = `url(https://i.pinimg.com/474x/ba/c1/11/bac111ba4d24cbc8e7caa9c762f4903d.jpg)`
//       } , [])

      const handleDelete = (event) => {
            deleteEvent(event.id).then(() => {
              getAllEvents().then((eventsArray) => {
                setEvents(eventsArray);
              });
            });
          };
      

  return (
    <div className="events-test">
    <div className="events">
      <div>
      <h2 className="title_events">Event</h2>
        <Row className="flex-row">
          {events.map((event) => {
            return (
              <Col key={event.id}>
                <Card
                  style={{
                    width: "12rem",
                    padding: "1em",
                    margin: 5,
                  }}
                >
                  <h2>{event.artistName}</h2>
                  <p>{event.supportingArtist}</p>
                  <p>{event.price}</p>
                  <p>{event.date}</p>
                  <p>{event.picture}</p>
                  <img className="event-images" src={event.Picture} alt={event.ArtistName}/>
                  <Link to={`/event/${event.id}/editEvent`}>
                    <Button color="primary" size="sm" style={{ margin: 5 }}>
                      Edit
                    </Button>
                  </Link>
                  <Button
                    color="danger"
                    size="sm"
                    style={{ margin: 5 }}
                    onClick={() => handleDelete(event.id)}>
                    Delete
                  </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
    <div>
      <Link to="/event/newEvent">
        <button className="button">Create New Event</button>
      </Link>
    </div>
  </div>
  );
};






