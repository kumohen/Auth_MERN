import React, { Component } from "react";
import { connect } from "react-redux";
import { resetPassword } from "../actions";
import { Form, Button, Col } from "react-bootstrap";

class Reset extends Component {
  state = {
    email: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitForm = (e) => {
    e.preventDefault();
    const { email } = this.state;
    this.props.resetPassword(email);
  };
  render() {
    return (
      <div>
        <div className="login">
          <i className="fa fa-badge"></i>
          <i
            className="fa fa-twitter fa-3x"
            aria-hidden="true"
            id="twitter_icons"
          ></i>
          <Form onSubmit={this.submitForm} className="login_form">
            <p className="login_title">Log in to Twitter</p>
            <Form.Group as={Col}>
              <Form.Control
                type="email1"
                name="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleInput}
              />
            </Form.Group>
            <hr />

            <Button type="submit" className="login_btn" block>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(null, { resetPassword })(Reset);
