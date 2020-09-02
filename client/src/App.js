import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import createHistory from "./api/history";
import Login from "./component/Signin";
import Register from "./component/Signup";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Reset from "./component/Reset";
import SetPassword from "./component/SetPassowrd";
import Error from "./component/Error";
import Success from "./component/Success";
import Edit from "./component/container/Edit";
import Create from "./component/container/Create";

const App = () => {
  return (
    <div>
      <Router history={createHistory}>
        <div>
          <Navbar />
          <Success />
          <Error />
          <Switch>
            <Route exact path="/resets" component={Reset} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/resets/:token" component={SetPassword} />
            <Route exact path="/" component={Login} />
            <Route exact path="/edit/:id" component={Edit} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/signup" component={Register} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
