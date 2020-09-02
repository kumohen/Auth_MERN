import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";

const Success = ({ auth }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (auth && auth.msg) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [auth]);
  return (
    <div>
      {auth && auth.msg && show ? (
        <motion.div
          id="success"
          initial={{ y: "-100vw" }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <p>{auth.msg}</p>
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(Success);
