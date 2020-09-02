import React, { useEffect } from "react";
import { connect } from "react-redux";
import Editors from "./Editor";
import { getPost } from "../actions";
import Posts from "./container/Posts";

const Home = () => {
  return (
    <div>
      <h3>Home</h3>
      <div className="container">
        <Editors />
      </div>
      <Posts />
    </div>
  );
};

export default connect(null, { getPost })(Home);
