import store from "../../store";
import { LOADING_REQUEST } from "../../redux/types";

const loadingUser = () => {
  try {
    if (localStorage.getItem("jwt")) {
      store.dispatch({
        type: LOADING_REQUEST,
        payload: localStorage.getItem("jwt"),
      });
    } else {
      store.dispatch({
        type: LOADING_REQUEST,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export default loadingUser;
