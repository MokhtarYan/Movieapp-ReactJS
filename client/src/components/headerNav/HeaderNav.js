import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./HeaderNav.css";

const HeaderNav = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="headd">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="Container">
          <div className="part1">
            <Link to="/" className="link1">
              <img
                src="https://res.cloudinary.com/dqzabjiql/image/upload/v1687132547/310-3108734_roll-set-eps-file-film-rolls-vector-png-removebg-preview_ldkrek.png"
                style={{ height: "50px", width: "auto" }}
                alt=""
              />{" "}
              CINEVERSE
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "20px",
            }}
          >
            <Nav
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "700px",
              }}
            >
              <div className="part2">
                <Link to="/" className="link2">
                  Home
                </Link>
                <Link to="/movies" className="link2">
                  Movies
                </Link>
                <Link to="/tvShows" className="link2">
                  TV Shows
                </Link>
              </div>
              <div className="part3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "fit-content",
                  }}
                >
                  <input type="text" className={show ? "open" : "close"} />
                  <button
                    className="searchButton"
                    onClick={() => setShow(!show)}
                  >
                    {" "}
                    <BsSearch />
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignContent: "center",
                  }}
                >
                  <Link to="signin" className="link3">
                    Sign In
                  </Link>
                  <Link to="/signup" className="link3">
                    Sign Up
                  </Link>
                </div>
              </div>
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
