import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import { getEventById, updateEvent } from "../../Services/EventsService";
import "./Events.css";

export const EditEvents = () => {
  const [events, setEvents] = useState({});
  const { id } = useParams();

  useEffect(() => {

    document.body.style.backgroundImage = `url(https://i.pinimg.com/474x/2d/76/47/2d76478455feeda973eb295263b2d0dc.jpg)`



    getEventById(id).then((data) => {
      const merchObj = data;
      setEvents(merchObj);
    });
  }, [id]);

  const handleSave = (event) => {
    event.preventDefault();
    const editedEvents = {
      id: events.id,
      artistName: events.artistName,
      supportingArtist: events.supportingArtist,
      price: events.price,
      date: events.date,
      picture: events.picture,
      
    };
    updateEvent(editedEvents).then(() => {
      navigate("/event");
    });
  };
  const navigate = useNavigate();
  return (
    <div className="form">
      <form>
        <h2 className="edit__event">Edit Event</h2>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={events.artistName}
              onChange={(event) => {
                const eventsCopy = { ...events };
                eventsCopy.artistName = event.target.value;
                setEvents(eventsCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={events.supportingArtist}
              onChange={(event) => {
                const eventsCopy = { ...events };
                eventsCopy.supportingArtist = event.target.value;
                setEvents(eventsCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={events.price}
              onChange={(event) => {
                const eventsCopy = { ...events };
                eventsCopy.price = event.target.value;
                setEvents(eventsCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={events.date}
              onChange={(event) => {
                const eventsCopy = { ...events };
                eventsCopy.date = event.target.value;
                setEvents(eventsCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={events.picture}
              onChange={(event) => {
                const eventsCopy = { ...events };
                eventsCopy.picture = event.target.value;
                setEvents(eventsCopy);
              }}
            ></input>
          </div>
        </fieldset>
        
        <fieldset className="form-group">
          <Button onClick={handleSave}>
            Save Event
          </Button>
        </fieldset>
      </form>
    </div>
  );
};