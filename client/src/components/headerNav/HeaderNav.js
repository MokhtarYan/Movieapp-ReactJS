import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
const HeaderNav = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dqzabjiql/image/upload/v1687132547/310-3108734_roll-set-eps-file-film-rolls-vector-png-removebg-preview_ldkrek.png"
              style={{ height: "60px", width: "auto" }}
              alt=""
            />{" "}
            CINEVERSE
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link to="/movies">Movies</Nav.Link>
              <Nav.Link to="/tvShows">TV Shows</Nav.Link>
              <input type="text" placeholder="Search" />
              <button>
                {" "}
                <BsSearch />
              </button>
              <Nav.Link to="signin">Sign In</Nav.Link>
              <Nav.Link to="/signup">Sign Up</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
