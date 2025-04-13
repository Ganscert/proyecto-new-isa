import { login } from "../../api/user";
import { setLogin, fullLogin } from "./authSlice";


export const loginUser = (code, password) => {
  return async (dispatch) => {
    try {
      dispatch(setLogin());

      const user = await login(code, password);

      if(user[1]){
        console.log(user)
        const result =  await dispatch(fullLogin({
          userName: user[0].nombre,
          position: user[0].cargo,
          codigo: user[0].codigo,
          transferencia: user[0].transferencia,
          recepcion: user[0].recepcion,
          preparacion: user[0].preparacion,
          EIE: user[0].EIE,
          saldoId: user[0].saldoId,
          inventario: user[0].inventario,
          caja : user[0].Caja
        }));
        console.log(result)
        return [result,true,user[2]]
      }else{
        return [undefined,false]

      }
     
    } catch (error) {
      console.log("error de contraseña invalida")
      console.log([error,false])
    };

  };
};