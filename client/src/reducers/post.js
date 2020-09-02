const initialState = {
  posts: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "CREATE_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case "GET_SINGLE_POST":
      return {
        ...state,
        editpost: action.payload,
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
}
