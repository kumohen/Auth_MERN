import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions";

const Navigationbar = ({ auth, logout }) => {
  return (
    <div>
      <Navbar bg="success" expand="lg">
        <Navbar.Brand href="#home">AuthM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link
              to="/home"
              className="mr text-white "
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>

            {auth && auth.isLoginin ? (
              <Button onClick={() => logout()}>logout</Button>
            ) : (
              <>
                <Link
                  to="/"
                  className="mr text-white"
                  style={{ textDecoration: "none" }}
                >
                  Login
                </Link>
                <Link
                  to="/home"
                  className="mr text-white"
                  style={{ textDecoration: "none" }}
                >
                  Home2
                </Link>
                <Link
                  to="/create"
                  className="mr text-white"
                  style={{ textDecoration: "none" }}
                >
                  Create
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logout })(Navigationbar);
