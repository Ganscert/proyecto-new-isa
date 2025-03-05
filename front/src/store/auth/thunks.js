import { login } from "../../api/user";
import { setLogin, fullLogin } from "./authSlice";


export const loginUser = (code, password) => {
  return async (dispatch) => {
    try {
      dispatch(setLogin());

      const user = await login(code, password);

      console.log(user);
      
      dispatch(fullLogin(user));

    } catch (error) {
      console.log('jj')
    };

  };
};