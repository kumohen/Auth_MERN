import React, { Component } from "react";
import { connect } from "react-redux";
import { UpdatePassword } from "../actions";
import { Form, Button, Col } from "react-bootstrap";

class SetPassword extends Component {
  state = {
    password: "",
    token: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitForm = (e) => {
    e.preventDefault();
    const { password } = this.state;
    this.props.UpdatePassword(password, this.props.match.params.token);
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
            <Form.Group as={Col}>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter new password"
                value={this.state.password}
                onChange={this.handleInput}
                style={{ marginLeft: "0px", width: "99%" }}
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

export default connect(null, { UpdatePassword })(SetPassword);
