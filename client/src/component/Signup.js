import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { userRegister } from "../actions";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {
    name: "",

    email: "",
    password: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const { name, password, email } = this.state;

    this.props.userRegister(name, password, email);
  };

  render() {
    return (
      <div className="shadow-lg p-3 mb-5 bg-red rounded  login">
        <Form onSubmit={this.submitForm} className="registation_form">
          <h2 className="login_title">SignUp </h2>

          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInput}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </Form.Group>

          <Button type="submit" className="login_btn" block>
            SignUp
          </Button>
          <p className="login_footer">
            If You have account ,Please go to
            <Link to="/">
              <b style={{ color: "black" }}> Signin </b>
            </Link>
            page
          </p>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { userRegister })(Register);
