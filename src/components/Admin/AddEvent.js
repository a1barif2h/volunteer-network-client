import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AddEvent = () => {
  const [addEvent, setAddEvent] = useState({
    date: new Date().toDateString(),
    pic: "",
  });
  const history = useHistory();

  const handelAddEvent = () => {
    fetch("https://mysterious-caverns-84621.herokuapp.com/add-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addEvent),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.date) {
          history.push("/");
        }
      });
  };
  return (
    <Container>
      <h3 className="pt-3 pb-3" style={{ marginLeft: "20px", color: "navy" }}>
        Add Event
      </h3>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group>
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                required
                onBlur={(event) =>
                  setAddEvent({ ...addEvent, title: event.target.value })
                }
                type="text"
                placeholder="Enter title"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                onBlur={(event) =>
                  setAddEvent({ ...addEvent, description: event.target.value })
                }
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group>
              <Form.Label>Event date</Form.Label>
              <Form.Control
                required
                onBlur={(event) =>
                  setAddEvent({ ...addEvent, date: event.target.value })
                }
                type="date"
                placeholder="Enter date"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Add Image</Form.Label>
              <Form.Control
                required
                onBlur={(event) =>
                  setAddEvent({ ...addEvent, pic: event.target.value })
                }
                type="text"
                placeholder="Your image link"
              />
            </Form.Group>
            <Button onClick={handelAddEvent} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddEvent;
