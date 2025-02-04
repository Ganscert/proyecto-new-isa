import { compareSync, genSaltSync, hashSync } from "bcryptjs"



export const bcryptAdapter = {
  hash: (password: string) => {
    if(!password){
      throw new Error("Password is required")
    }
    const salt = genSaltSync()
    return hashSync(password, salt)
  },
  compare: (password: string, hashed: string) => {
    return compareSync(password, hashed)
  }
}