import React from "react";
import { Card } from "react-bootstrap";

const Events = (props) => {
  const { title, pic, color } = props.volunteerEvent;
  return (
    <div className="d-flex justify-content-between pb-4">
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
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Events;
