import { useState, useEffect } from "react";
import "./Merch.css";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { createMerch } from "../../Services/MerchService";

export const NewMerch = () => {
    // {currentUser}
  const [newMerch, setNewMerch] = useState({
    itemName: "",
    description: "",
    price: "",
    // quantity: "",
    picture: ""
  });

  const navigate = useNavigate()

  const handleSave = (event) => {
    event.preventDefault()

    const merch = {
        itemName: newMerch.itemName,
        description: newMerch.description,
        price: newMerch.price,
        // quantity: newMerch.quantity,
        picture: newMerch.picture,
    }
    createMerch(merch).then(() => {
        navigate("/merch")
    })

  }

  useEffect(() => {
    document.body.style.backgroundImage = `url(https://i.pinimg.com/474x/2d/76/47/2d76478455feeda973eb295263b2d0dc.jpg)`
  } , [])





  return (
    <div className="form">
      <form className="merch-form">
        <h2 className="new__merch">New Item</h2>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Item Name"
            onChange={(merch) => {
              const merchCopy = { ...newMerch };
              merchCopy.itemName = merch.target.value;
              setNewMerch(merchCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Description"
            onChange={(event) => {
              const merchCopy = { ...newMerch };
              merchCopy.description = event.target.value;
              setNewMerch(merchCopy);
            }}
          ></input>
        </fieldset>
        {/* <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Quantity"
            onChange={(event) => {
              const merchCopy = { ...newMerch };
              merchCopy.quantity = event.target.value;
              setNewMerch(merchCopy);
            }}
          ></input>
        </fieldset> */}
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Price"
            onChange={(event) => {
              const merchCopy = { ...newMerch };
              merchCopy.price = event.target.value;
              setNewMerch(merchCopy);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            text="text"
            className="form-control"
            placeholder="Picture"
            onChange={(event) => {
              const merchCopy = { ...newMerch };
              merchCopy.picture = event.target.value;
              setNewMerch(merchCopy);
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