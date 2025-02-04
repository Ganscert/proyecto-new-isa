import jwt from 'jsonwebtoken'
import { envs } from './env';



const JWT_SEED = envs.seed;


export class JwtAdapter {

   static async generateToken(payload: any) {

      return new Promise((resolve) => {
         jwt.sign(payload, JWT_SEED!, { expiresIn: "8h" }, (err, token) => {
            if (err) return resolve(null);
            resolve(token)

         })
      })

   }

   static validateToken<T>(token: string): Promise<T | null> {


      return new Promise((resolve) => {
         jwt.verify(token, JWT_SEED!, (err: any, decoded: unknown) => {

            if (err) return resolve(null)
            resolve(decoded as T)
         }
         )
      })
   }
}




