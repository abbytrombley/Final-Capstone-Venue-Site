import { useState } from "react";
import "./Events.css";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { createEvent } from "../../Services/EventsService";

export const NewEvents = () => {
    
  const [newEvent, setNewEvent] = useState({
    artistName: "",
    supportingArtist: "",
    price: "",
    date: "",
    picture: ""
  });

  const navigate = useNavigate()

  const handleSave = (event) => {
    event.preventDefault()

    const AddEvent = {
        artistName: newEvent.artistName,
        supportingArtist: newEvent.supportingArtist,
        price: newEvent.price,
        date: newEvent.date,
        picture: newEvent.picture,
    }
    createEvent(AddEvent).then(() => {
        navigate("/event")
    })

  }

  return (
    <div className="form">
      <form className="event-form">
        <h2 className="new__event">New Event</h2>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Artist Name"
            onChange={(event) => {
              const eventsCopy = { ...newEvent };
              eventsCopy.artistName = event.target.value;
              setNewEvent(eventsCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Description"
            onChange={(event) => {
              const eventsCopy = { ...newEvent };
              eventsCopy.supportingArtist = event.target.value;
              setNewEvent(eventsCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Price"
            onChange={(event) => {
              const eventsCopy = { ...newEvent };
              eventsCopy.price = event.target.value;
              setNewEvent(eventsCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            type="date"
            className="form-control"
            placeholder="Date"
            onChange={(event) => {
              const eventsCopy = { ...newEvent };
              eventsCopy.date = event.target.value;
              setNewEvent(eventsCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Picture"
            onChange={(event) => {
              const eventsCopy = { ...newEvent };
              eventsCopy.picture = event.target.value;
              setNewEvent(eventsCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <Button onClick={handleSave}>
            Submit New Item
          </Button>
        </fieldset>
      </form>
    </div>
  );
};