import { useState } from "react";

export const TablaUsd = ({ onUpdate }) => {
  const denominaciones = [1,2,5,10,20,50,100];
  const [cantidades, setCantidades] = useState(Array(denominaciones.length).fill(0));
  const [ajustes, setAjustes] = useState(Array(denominaciones.length).fill(""));

  const handleCantidadChange = (index, value) => {
    const nuevaCantidad = [...cantidades];
    const nuevoValor = parseInt(value);
    nuevaCantidad[index] = isNaN(nuevoValor) || nuevoValor < 0 ? 0 : nuevoValor;
    setCantidades(nuevaCantidad);
  };

  const handleAjusteChange = (index, value) => {
    const parsedValue = value.trim() === "" || !isNaN(value) || /^-?\d*\.?\d*$/.test(value);
    if (parsedValue) {
      const nuevosAjustes = [...ajustes];
      nuevosAjustes[index] = value;
      setAjustes(nuevosAjustes);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    onUpdate(cantidades)
  }


  const handleKeyPress = (e, index) => {
    if (e.key === "Enter") {
      const ajuste = parseInt(ajustes[index]);
      if (!isNaN(ajuste)) {
        const nuevaCantidad = [...cantidades];
        nuevaCantidad[index] = Math.max(0, nuevaCantidad[index] + ajuste);
        setCantidades(nuevaCantidad);

        const nuevosAjustes = [...ajustes];
        nuevosAjustes[index] = "";
        setAjustes(nuevosAjustes);
      }

      // Saltar al siguiente input si existe
      let nextInput = document.querySelector(`#ajuste-${index + 1}`);
      if (index > 8) {
        nextInput = document.querySelector(`#ajuste-${index - 9}`)
        nextInput.focus();
      } else if (nextInput) {
        console.log(index)
        nextInput.focus()
      }
    }
  };

  return (
    <>
      <div className="container text-center mt-3">
        <div className="row justify-content-center">
          <div className="col-12 col-md-7 mb-3">
            <div className="table-responsive">
              <table className="table-responsive table" border="1" style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th style={{ width: "10%" }}>Agregar o quitar</th>
                    <th style={{ whiteSpace: "nowrap" }}>Denominación</th>
                    <th style={{ width: "15%" }}>Cantidad</th>
                    <th style={{ width: "20%" }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {denominaciones.map((denom, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          id={`ajuste-${index}`}
                          type="text"
                          value={ajustes[index]}
                          onChange={(e) => handleAjusteChange(index, e.target.value)}
                          onKeyPress={(e) => handleKeyPress(e, index)}
                          style={{ width: "100%" }}
                        />
                      </td>
                      <td>
                        <p style={{ margin: 0 }}>{denom}</p>
                      </td>
                      <td>
                        <input
                          type="text"
                          min="0"
                          value={cantidades[index]}
                          onChange={(e) => handleCantidadChange(index, e.target.value)}
                          style={{ width: "100%" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={cantidades[index] * denom}
                          readOnly
                          style={{ width: "100%" }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button type="button" onClick={handleSubmit} className="btn btn-primary mt-2">
                Enviar
              </button>
            </div>
          </div>

          <div className="col-12 col-md-5">
            <div className="d-flex justify-content-center" style={{ alignContent: "center" }}>
              <div style={{ width: "280px" }}>
                <div className="table-responsive">
                  <table className="table">
                    <thead className="">
                      <tr>
                        <th>Monto Total</th>
                        <th>Monto Digitado</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>klk</td>
                        <td>klk</td>
                      </tr>
                      <tr>
                        <td colSpan="2"><b>Diferencia</b></td>
                      </tr>
                      <tr>
                        <td colSpan="2"><p>klk</p></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};