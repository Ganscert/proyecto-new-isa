import { JwtAdapter } from "../config/jwtAdapter"


export const AuthService={
  login: async (payload:object)=>{
    const e = await JwtAdapter.generateToken(payload)
    return e
  },

  logOut: ()=>{
    localStorage.removeItem('token')
  }
}