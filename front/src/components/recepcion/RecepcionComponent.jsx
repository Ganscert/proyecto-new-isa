import { useState } from "react";
import { useForm } from "../../hooks/useForm";


export const RecepcionComponent = () => {

  const [valijas, setValijas] = useState([])


  let { camion, transportista, valija, tipoDeValija, formState, onInputChange, onResetForm } = useForm({
    camion: '',
    valija: '',
    tipoDeValija: '',
    transportista: ''
  })

  const registrarValijaEnBD = async (nuevaValija) => {
    console.log
    try {
      const response = await fetch("http://localhost:3000/valijas/registrarValija", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ codigo: nuevaValija.valija,tipo:nuevaValija.tipo,camion,transportista }),
      });
      // Verificar si la respuesta fue exitos sdsd
      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
      // Obtener la respuesta JSON
      const data = await response.json();
      // Devolver el valor de success
      return data;
    } catch (error) {
      console.error("Error al registrar la valija:", error);
      return false;
    }
  };

  const verificarValijaEnBd = async (nuevaValija) => {

    const data = await fetch(`http://localhost:3000/valijas/getByCodigo/${nuevaValija}`)
    const verificacion = data.json()
    return verificacion
  }

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const nuevaValija = {
        valija: valija.trim(),
        tipo: tipoDeValija
      };

      // Verificar si la valija ya está en la lista
      const existe = valijas.some(
        (item) => item.valija === nuevaValija.valija
      );
      if (nuevaValija.valija === '') {
        alert("ingrese un codigo de valija valido.");
        return;
      }else if (nuevaValija.tipo === "") {
        alert("la valija no tiene un tipo designado");
        return;
      } 

      
      const existeEnBD = await verificarValijaEnBd(nuevaValija.valija)

       if (existeEnBD[1]) {
        alert("esta valija ya existe en el sistema");
        onInputChange({ target: { name: "valija", value: "" } });
        return;
      } else if (existe) {
        alert("La valija con ese tipo ya está en la lista");
        onInputChange({ target: { name: "valija", value: "" } });
        return;
      }
      // Agregar al estado
      setValijas([...valijas, nuevaValija]);

      // Resetear los valores en el formulario
      onInputChange({ target: { name: "valija", value: "" } });
    }
  };

  const handleRegisteValija = async (e) => {
    e.preventDefault()
    try {

      for (let i = 0; i < valijas.length; i++) {
        const valija = valijas[i];
        const registro = await registrarValijaEnBD(valija)
        console.log(registro,valija)
      }

      onResetForm()
      setValijas([])
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
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
      <input type="text"
        name="transportista"
        value={transportista}
        onChange={onInputChange}
        placeholder="transporte"
      />
      <input type="text"
        name="camion"
        value={camion}
        onChange={onInputChange}
        placeholder="camion"
      />
      <input type="text"
        name="valija"
        value={valija}
        onChange={onInputChange}
        placeholder="valija"
        onKeyDown={handleKeyDown}
      />

      <select name="tipoDeValija" value={tipoDeValija} onChange={onInputChange} >
        <option defaultValue="X">SELECIONE UNA OPCION</option>
        <option defaultValue="ATM RETIRO">ATM</option>
        <option defaultValue="ATM DEPOSITO">ATM</option>
        <option defaultValue="BR CASSETE">BR CASSETE</option>
        <option defaultValue="BR CAIDA LIBRE">BR CAIDA LIBRE</option>
        <option defaultValue="CLIENTES CORPORATIVOS">CLIENTES CORPORATIVOS</option>
        <option defaultValue="OFICINA">OFICINA</option>
        <option defaultValue="DOLARES">DOLARES</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>valija</th>
            <th>tipo</th>
          </tr>
        </thead>
        <tbody>
          {valijas.map((valija, index) => (
            <tr key={index}>
              <td>{valija.valija}</td>
              <td>{valija.tipo}</td>
            </tr>
          ))}

        </tbody>
      </table>

      <button onClick={handleRegisteValija}>Registrar Valijas</button>
    </form>
  )
};