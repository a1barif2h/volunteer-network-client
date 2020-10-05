import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { localContext } from "../../App";
import { People, Plus } from "react-bootstrap-icons";
import logo from "../../images/logo.png";

const LefSide = () => {
  const [logedInUser, setLogedInUser] = useContext(localContext);
  useEffect(() => {
    setLogedInUser({ ...logedInUser, clicked: "volunteerList" });
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <Link to="/">
            <img style={{ width: "250px" }} src={logo} alt="" />
          </Link>
        </Col>
      </Row>
      <Row className="pt-4 pb-2">
        <Col>
          <Button
            style={{ width: "100%" }}
            variant="outline-primary"
            onClick={() =>
              setLogedInUser({ ...logedInUser, clicked: "volunteerList" })
            }
          >
            <People /> <b>Volunteer register list</b>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="outline-primary"
            style={{ width: "100%" }}
            onClick={() =>
              setLogedInUser({ ...logedInUser, clicked: "addEvent" })
            }
          >
            <Plus />
            <b>Add Event</b>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LefSide;
