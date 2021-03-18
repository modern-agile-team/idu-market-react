import store from "../../store";
import { LOADING_REQUEST } from "../../redux/types";

const loadingUser = () => {
  try {
    store.dispatch({
      type: LOADING_REQUEST,
      payload: localStorage.getItem("jwt"),
    });
  } catch (e) {
    console.log(e);
  }
};

export default loadingUser;
