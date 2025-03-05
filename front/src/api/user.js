


export const login = async (code,password) => {
  const peticion = await fetch("http://localhost:3000/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ codigo: code, Contrasena: password })
  })

  const data = await peticion.json()
  return data
}