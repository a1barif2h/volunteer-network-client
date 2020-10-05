import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { localContext } from "../../App";
import logo from "../../images/logo.png";

const Header = () => {
  const [logedInUser, setLogedInUser] = useContext(localContext);
  const logoStyle = {
    height: "45px",
  };
  return (
    <div>
      <Navbar expand="lg" className="pt-3" variant="light">
        <Navbar.Brand href="/home">
          <img style={logoStyle} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto font-weight-bold">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/donation">Donation</Nav.Link>
            <Nav.Link href="/user-events">Events</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            {logedInUser.email ? (
              <>
                <Nav.Link href="/">{logedInUser.name}</Nav.Link>
                <Nav.Link href="/admin">
                  <Button variant="dark">Admin</Button>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login">
                  <Button variant="primary">Login</Button>
                </Nav.Link>
                <Nav.Link href="/admin">
                  <Button variant="dark">Admin</Button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
