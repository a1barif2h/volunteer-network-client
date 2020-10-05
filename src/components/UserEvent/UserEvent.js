import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { localContext } from "../../App";
import Header from "../Header/Header";
import img from "../../images/logo.png";

const UserEvent = () => {
  const [logedInUser, setLogedInUser] = useContext(localContext);
  const [userEvent, setUserEvent] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-caverns-84621.herokuapp.com/user-events", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        email: logedInUser.email,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserEvent(data);
      });
  }, []);

  const cancelHandler = (id) => {
    fetch("https://mysterious-caverns-84621.herokuapp.com/cancel-event", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        id: id,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          const existingEvents = userEvent.filter((data) => data._id !== id);
          setUserEvent(existingEvents);
        }
      });
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#F8FAFC",
      }}
    >
      <Container>
        <Header />
        <Row
          style={{ width: "100vw" }}
          className=" d-flex justify-content-between pt-5"
        >
          {userEvent.map((event) => (
            <Col key={event._id} className="pb-4" md={6}>
              <Card
                className="pb-4"
                style={{ width: "32rem", padding: "15px" }}
              >
                <Row>
                  <Col md={4}>
                    <Card.Img
                      style={{ width: "100%", height: "100%" }}
                      variant="top"
                      src={img}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{event.eventName}</Card.Title>
                      <Card.Text> {event.date} </Card.Text>
                      <Button
                        onClick={() => cancelHandler(event._id)}
                        variant="primary"
                      >
                        Cancel
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default UserEvent;
