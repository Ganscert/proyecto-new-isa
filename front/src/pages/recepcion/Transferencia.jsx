import { useEffect, useState } from "react"
import { NavBar } from "../../components/NavbarHero"
import { useForm } from "../../hooks/useForm"

export const Transferencia = () => {


  const [users, setUsers] = useState([])
  const [valijas, setValijas] = useState([])
  const [valijasUser, setValijasUser] = useState([])


  //esto es para hacer la lista de usuarios disponibles en el sistema
  useEffect(() => {
    const usuarios = async () => {
      const peticion = await fetch('http://localhost:3000/user/getAll')
      const data = await peticion.json()
      setUsers(data)
    }
    usuarios()
  }, [])

  const { formState, onInputChange, usuarioDestino, usuarioFuente, valija, onResetForm } = useForm({
    usuarioFuente: '',
    usuarioDestino: '',
    valija: ''
  });


  //esto es para establecer las valijas del usuario fuente
  useEffect(() => {
    const peticion = async () => {
      try {
        if (!usuarioFuente) return; // Evita hacer la petición si usuarioFuente está vacío

        const respuesta = await fetch(`http://localhost:3000/user/consultaValijas/${usuarioFuente}`);

        if (!respuesta.ok) {
          throw new Error(`Error en la consulta: ${respuesta.status}`);
        }

        const data = await respuesta.json();

        if (data.inventario) {
          setValijasUser(data.inventario);
        } else {
          console.warn("No se encontró inventario en la respuesta.");
        }
      } catch (error) {
        console.error("Error en la petición:", error);
      }
    };

    peticion();
  }, [usuarioFuente]);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (valijasUser.includes(valija)) {
        setValijas([...valijas, valija.trim()])
        onInputChange({ target: { name: "valija", value: "" } });
      } else {
        alert('este usuario no tiene la valija')
        onInputChange({ target: { name: "valija", value: "" } });
      }
    }
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log({ usuarioDestino, usuarioFuente })
      if (usuarioDestino === usuarioFuente) {
        return console.log('usuarios son los mismos, no se pueden enviar valijas entre el mismo usuario')
      }

      for (let i = 0; i < valijas.length; i++) {
        const valija = valijas[i];
        const response = await fetch("http://localhost:3000/user/asignacion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userDestino: usuarioDestino, valija, userFuente: usuarioFuente }),
        });


        const data = await response.json();
        console.log(data)
      }
      // const response = await fetch("http://localhost:3000/user/asignacion", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ userDestino: usuarioDestino,valija : "2" , userFuente : usuarioFuente}),
      // });


      // const data = await response.json();
      // console.log(data)
      onResetForm()
      setValijas([])
    } catch (error) {
      console.log(error)
    }

  }



  return (



    <>
      <NavBar />
      <form
        style={{
          margin: "auto",
          marginTop: "10dvh",
          backgroundColor: "#7a4",
          padding: 10,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          width: "30dvw"
        }}>
        <label htmlFor="usuario-desde">seleccione un usuario</label>
        <input
          id="usuario-desde"
          list="usuarios"
          placeholder="fuente"
          value={usuarioFuente}
          name="usuarioFuente"
          onChange={onInputChange}
        />
        <input
          id="usuarios-hasta"
          list="usuarios"
          placeholder="hasta"
          value={usuarioDestino}
          onChange={onInputChange}
          name="usuarioDestino"
        />
        <input
          placeholder="valija"
          value={valija}
          onChange={onInputChange}
          name="valija"
          onKeyDown={handleKeyDown}
        />


        <datalist id="usuarios">
          {users.map(i => {
            return <option key={i[1]} value={i[2]}> </option>
          })}
        </datalist>

        <table>
          <thead>
            <tr>
              <th>valijas</th>
            </tr>
          </thead>
          <tbody>
            {valijas.map((valija, index) => (
              <tr key={index}>
                <td>{valija}</td>
              </tr>
            ))}

          </tbody>
        </table>

        <button onClick={handleSubmit}>enviar datos</button>
      </form>
    </>
  )
}
