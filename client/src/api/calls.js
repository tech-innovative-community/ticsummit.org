import axios from "axios";
import { loginRoute, toastOptions } from "./endpoints";
import { toast } from "react-toastify";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(loginRoute, userCredential);
    if (res.data.status === false) {
      dispatch({ type: "LOGIN_FAILED", payload: res.data.msg });
      toast.error(res.data.msg, toastOptions);
    }
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
