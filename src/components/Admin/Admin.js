import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { localContext } from "../../App";
import { Trash } from "react-bootstrap-icons";
import LefSide from "./LefSide";
import AddEvent from "./AddEvent";

const Admin = () => {
  const [logedInUser, setLogedInUser] = useContext(localContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/registered-events")
      .then((res) => res.json())
      .then((result) => setEvents(result));
  }, []);

  const deleteHandler = (id) => {
    fetch("http://localhost:5000/cancel-event", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        id: id,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        const existingEvents = events.filter((data) => data._id !== id);
        if (result) {
          setEvents(existingEvents);
        }
      });
  };
  return (
    <Container style={{ backgroundColor: "#F8FAFC", height: "100vh" }} fluid>
      <Row>
        <Col md={3}>
          <LefSide />
        </Col>
        {logedInUser.clicked == "volunteerList" ? (
          <Col md={8}>
            <h3
              className="pb-4 pt-3"
              style={{
                textAlign: "left",
                marginLeft: "10px",
                color: "navy",
              }}
            >
              Volunteer register list
            </h3>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email Id</th>
                  <th>Registration Date</th>
                  <th>Volunteer list</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event._id}>
                    <td> {event.name} </td>
                    <td> {event.email}</td>
                    <td> {event.date} </td>
                    <td> {event.eventName} </td>
                    <td>
                      {" "}
                      <Trash
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteHandler(event._id)}
                      />{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        ) : (
          <Col md={8}>
            <AddEvent />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Admin;
