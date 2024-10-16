//Purpose: for user view (no crud)

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";
import { getAllEvents } from "../../Services/EventsService";
import "./Events.css";

export const GuestCalendar = () => {
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

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="events-test">
      <h2 className="title_events">Upcoming Events</h2>
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
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <Link to="/events">
        <button className="button">Back to Events List</button>
      </Link>
    </div>
  );
};
