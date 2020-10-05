import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Events = (props) => {
  const { pic, color } = props.event;
  const history = useHistory();
  const handelEvent = (title) => {
    history.push(`/register/${title}`);
  };
  return (
    <div
      onClick={() => handelEvent(props.event.title)}
      className="d-flex justify-content-between pb-4"
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body
          style={{
            fontSize: "12px",
            backgroundColor: `${color}`,
            textAlign: "center",
            color: "#ffffff",
            borderRadius: "5px",
            marginTop: "-60px",
          }}
        >
          <Card.Title>{props.event.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Events;
