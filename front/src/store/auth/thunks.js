import { login } from "../../api/user";
import { setLogin, fullLogin } from "./authSlice";


export const loginUser = (code, password) => {
  return async (dispatch) => {
    try {
      dispatch(setLogin());

      const user = await login(code, password);
      console.log(['este es el usuario',user[0]])

      if(user[1]){
        const result =  await dispatch(fullLogin({
          userName: user[0].nombre,
          position: user[0].cargo,
          codigo: user[0].codigo,
          transferencia: user[0].transferencia,
          recepcion: user[0].recepcion,
          preparacion: user[0].preparacion,
          EIE: user[0].EIE,
          saldoId: user[0].saldoId
        }));
        console.log(result)
        return [result,true]
      }else{
        return [undefined,false]

      }
     
    } catch (error) {
      console.log("error de contraseña invalida")
      console.log([error,false])
    };

  };
};