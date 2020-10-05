import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import homeBg from "../../images/home-bg.png";
import { Col, Container, Row } from "react-bootstrap";
import Search from "../Search/Search";
import Events from "../Events/Events";

const Home = () => {
  const [volunteerEvents, setVolunteerEvents] = useState([]);
  useEffect(() => {
    fetch("https://mysterious-caverns-84621.herokuapp.com/volunteerTasks")
      .then((res) => res.json())
      .then((data) => setVolunteerEvents(data));
  }, []);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient( rgba(192,192,192, 0.8), rgba(192,192,192, 0.8) ), url(${homeBg})`,
        height: "65vh",
        backgroundPosition: "center center",
      }}
    >
      <Container>
        <Header />
        <Search />
        <Row style={{ cursor: "pointer" }} className="mt-5">
          {volunteerEvents.map((event) => (
            <Col key={event._id} md={3}>
              <Events event={event} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
