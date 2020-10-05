import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";

const NotFound = () => {
  return (
    <Container>
      <Header />
      <div
        style={{
          textAlign: "center",
          color: "red",
          fontWeight: "bold",
          padding: "30px",
        }}
      >
        <h1>404</h1>
        <h1>NOT FOUND........!</h1>
      </div>
    </Container>
  );
};

export default NotFound;
