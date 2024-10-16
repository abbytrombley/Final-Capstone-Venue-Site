//Purpose: Make page that shows Merch

import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";
import { deleteMerch, getAllMerch } from "../../Services/MerchService";
import "./Merch.css";

export const Merch = () => {
    //({ currentUser })would go in parenthesis

    const [merch, setMerch] = useState([]);
    // const [myMerch, setMyMerch] = useState([]);
  
    useEffect(() => {
      getAllMerch().then((merchArray) => {
        setMerch(merchArray);
      });
    }, []);
  
    // useEffect(() => {
    //   const foundMerch = merch.filter(
    //     (merch) => merch.userId === currentUser.id
    //   );
    //   setMyMerch(foundMerch);
    // }, [merch]);

    useEffect(() => {
      document.body.style.backgroundImage = `url(https://i.pinimg.com/564x/aa/44/53/aa4453ce6306d2aa24bd1eecb5a5060d.jpg)`
    } , [])
  
    const handleDelete = (merchId) => {
      deleteMerch(merchId).then(() => {
        getAllMerch().then((merchArray) => {
          setMerch(merchArray);
        });
      });
    };
  
    return (
      <div className="merch-test">
        <div className="merch">
          <div>
          <h2 className="title_merch">MERCH</h2>
            <Row className="flex-row">
              {merch.map((merch) => {
                return (
                  <Col key={merch.id}>
                    <Card
                      style={{
                        width: "12rem",
                        padding: "1em",
                        margin: 5,
                      }}
                    >
                      <h2>{merch.itemName}</h2>
                      <img src={merch.picture} />
                      <p>{merch.price}</p>
                      <p>{merch.quantity}</p>
                      <p>{merch.description}</p>
                     
                      {/* <img className="merch-images" src={merch.imageURL} alt={merch.itemName}/> */}
                      <Link to={`/merch/${merch.id}/editMerch`}>
                        <Button color="primary" size="sm" style={{ margin: 5 }}>
                          Edit
                        </Button>
                      </Link>
                      <Button
                        color="danger"
                        size="sm"
                        style={{ margin: 5 }}
                        onClick={() => handleDelete(merch.id)}>
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
          <Link to="/merch/newMerch">
            <button className="button">Create New Merch Item</button>
          </Link>
        </div>
      </div>
    );
  };
  


















