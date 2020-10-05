import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { localContext } from "../../App";
import logo from "../../images/logo.png";

const Register = () => {
  const { title } = useParams();
  const history = useHistory();
  const [logedInUser, setLogedInUser] = useContext(localContext);
  const [register, setRegister] = useState({
    eventName: logedInUser.event?.name,
    date: new Date().toDateString(),
    email: logedInUser.email,
    pic: logedInUser.event?.pic,
  });
  const handelSubmitRegister = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/submit-register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          history.push("/user-events");
        }
      });
  };
  const formStyle = {
    border: "0",
    borderBottom: "1px solid #dddddd",
  };
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#F8FAFC",
        height: "100vh",
      }}
    >
      <img className="mt-5" style={{ width: "200px" }} src={logo} alt="" />
      <div
        style={{
          border: "2px solid #ABABAB",
          width: "570px",
          margin: "50px auto",
          height: "450px",
          backgroundColor: "#ffffff",
          borderRadius: "5px",
        }}
      >
        <div style={{ padding: "15px" }}>
          <h3 className="mb-3">Register as a Volunteer</h3>
          <small style={{ color: "red" }}>
            *Please clicked every field first to confirms your information!If
            you don't clicked your information don't save!!
          </small>
          <Form onSubmit={handelSubmitRegister} style={{ padding: "15px" }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                onBlur={(e) =>
                  setRegister({ ...register, name: e.target.value })
                }
                style={formStyle}
                type="text"
                defaultValue={logedInUser.name || ""}
                placeholder="Full Name"
                name="name"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                onBlur={(e) =>
                  setRegister({ ...register, email: e.target.value })
                }
                style={formStyle}
                type="email"
                defaultValue={logedInUser.email || ""}
                placeholder="username or email"
                name="email"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                onBlur={(e) =>
                  setRegister({ ...register, date: e.target.value })
                }
                style={formStyle}
                type="text"
                placeholder="dd/mm/yyyy"
                name="date"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                onBlur={(e) =>
                  setRegister({ ...register, description: e.target.value })
                }
                style={formStyle}
                type="text"
                placeholder="Description"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                onBlur={(e) =>
                  setRegister({ ...register, eventName: e.target.value })
                }
                style={formStyle}
                type="text"
                defaultValue={title}
                placeholder="enter event title"
                name="organizer"
                required
              />
            </Form.Group>
            <Button style={{ width: "100%" }} variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
