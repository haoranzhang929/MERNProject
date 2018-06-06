import axios from "axios";
import { GET_ERRS } from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("./login"))
    .catch(err =>
      dispatch({
        type: GET_ERRS,
        payload: err.response.data
      })
    );
};
