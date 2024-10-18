import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import { getMerchById, updateMerch } from "../../Services/MerchService";
import "./Merch.css";

export const EditMerch = () => {
  const [merch, setMerch] = useState({});
  const { id } = useParams();

  useEffect(() => {
    
    document.body.style.backgroundImage = `url(https://i.pinimg.com/474x/2d/76/47/2d76478455feeda973eb295263b2d0dc.jpg)`


    getMerchById(id).then((data) => {
      const merchObj = data;
      setMerch(merchObj);
    });
  }, [id]);

  const handleSave = (event) => {
    event.preventDefault();
    const editedMerch = {
      id: merch.id,
      itemName: merch.itemName,
      description: merch.description,
      price: merch.price,
    //   quantity: merch.quantity,
      picture: merch.picture,
      
    };
    updateMerch(editedMerch).then(() => {
      navigate("/merch");
    });
  };
  const navigate = useNavigate();
  return (
    <div className="form">
      <form>
        <h2 className="edit__merch">Edit Item</h2>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={merch.itemName}
              onChange={(event) => {
                const merchCopy = { ...merch };
                merchCopy.itemName = event.target.value;
                setMerch(merchCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={merch.description}
              onChange={(event) => {
                const merchCopy = { ...merch };
                merchCopy.description = event.target.value;
                setMerch(merchCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={merch.price}
              onChange={(event) => {
                const merchCopy = { ...merch };
                merchCopy.price = event.target.value;
                setMerch(merchCopy);
              }}
            ></input>
          </div>
        </fieldset>
        {/* <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={merch.quantity}
              onChange={(event) => {
                const merchCopy = { ...merch };
                merchCopy.quantity = event.target.value;
                setMerch(merchCopy);
              }}
            ></input>
          </div>
        </fieldset> */}
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={merch.picture}
              onChange={(event) => {
                const merchCopy = { ...merch };
                merchCopy.picture = event.target.value;
                setMerch(merchCopy);
              }}
            ></input>
          </div>
        </fieldset>
        
        <fieldset className="form-group">
          <Button onClick={handleSave}>
            Save Item
          </Button>
        </fieldset>
      </form>
    </div>
  );
};