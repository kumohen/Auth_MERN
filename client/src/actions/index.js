import axios from "../api/posts";
import history from "../api/history";
// import axios from "axios";

export const userLogin = (email, password) => async (dispatch) => {
  const response = await axios.post("/signin", { email, password });

  if (response.data.error) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: response.data.error,
    });
  } else {
    dispatch({
      type: "USER_LOGIN",
      payload: response.data,
      success: response.data.msg,
    });
    console.log(response.data);
    localStorage.setItem("jwt", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    history.push("/home");
  }
};
export const userRegister = (name, password, email) => async (dispatch) => {
  const response = await axios.post("/signup", {
    name,

    password,
    email,
  });
  console.log(response);
  if (response.data.error) {
    dispatch({
      type: "FAIL_REGISTER",
      payload: response.data.error,
    });
  } else {
    dispatch({
      type: "USER_REGISTER",
      payload: response.data,
    });

    history.push("/");
  }
};

export const resetPassword = (email) => async (dispatch) => {
  const response = await axios.post("/reset", {
    email,
  });

  dispatch({
    type: "RESET_PASSWORD",
    payload: response.data,
  });

  history.push("/");
};

export const UpdatePassword = (password, token) => async (dispatch) => {
  const response = await axios.post("/updatePassword", {
    password,
    token,
  });

  dispatch({
    type: "UPDATE_PASSWORD",
    payload: response.data,
  });

  history.push("/");
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({
    type: "USER_LOGOUT",
    msg: "You successfully logout",
  });

  history.push("/");
};

export const getPost = () => async (dispatch) => {
  const response = await axios.get("/allPost");

  dispatch({
    type: "GET_ALL_POST",
    payload: response.data,
  });
};
export const singlePost = (id) => async (dispatch) => {
  const response = await axios.get(`/post/${id}`);

  dispatch({
    type: "GET_SINGLE_POST",
    payload: response.data,
  });
};

export const createPost = (title) => async (dispatch) => {
  const response = await axios.post(`/create`, { title });
  console.log(response.data);
  dispatch({
    type: "CREATE_POST",
    payload: response.data,
  });
  history.push("/home");
};

export const editPost = (postId, title) => async (dispatch) => {
  const response = await axios.put(`/update`, { postId, title });

  dispatch({
    type: "UPDATE_POST",
    payload: response.data,
  });
  history.push("/home");
};

export const removePost = (id) => async (dispatch) => {
  await axios.delete(`/deletePost/${id}`);

  dispatch({
    type: "DELETE_POST",
    payload: id,
  });
};
