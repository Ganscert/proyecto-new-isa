import { useRef } from "react";
import { useForm } from "../hooks/useForm";

export const TablaDop = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    DOP50: "", DOP100: "", DOP200: "", DOP500: "",
    DOP1000: "", DOP2000: "", DOP1: "", DOP5: "", DOP10: "", DOP25: ""
  });

  const denominaciones = [50, 100, 200, 500, 1000, 2000, 1, 5, 10, 25];
  const inputRefs = useRef([]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      onInputChange(e);
    }
  };


  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) nextInput.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevInput = inputRefs.current[index - 1];
      if (prevInput) prevInput.focus();
    }
  };


  const handleSubmit = () => {
    const results = denominaciones.reduce((acc, d) => {
      const value = formState[`DOP${d}`] || 0;
      acc[`DOP${d}`] = value * d;
      return acc;
    }, {});


    console.log(results);
  };

  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col" style={{ width: "3000px" }}>Denominación (DOP)</th>
              <th scope="col" style={{ width: "3000px" }}>Cantidad</th>
              <th scope="col" style={{ width: "3000px" }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {denominaciones.map((d, index) => (
              <tr key={d}>
                <td className="fw-bold">{d}</td>
                <td>
                  <input
                    type="text"
                    name={`DOP${d}`}
                    value={formState[`DOP${d}`] || ""}
                    onChange={handleInputChange}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="form-control text-center"
                    ref={(el) => (inputRefs.current[index] = el)}
                    style={{
                      width: "100px",
                      borderRadius: "8px",
                      border: "1px solid #a1a1a1ff",
                      padding: "10px",
                      fontSize: "16px",
                      backgroundColor: "#f9f9f9",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease-in-out",
                      outline: "none"
                    }}
                    onFocus={(e) => e.target.style.boxShadow = "0 4px 8px rgba(0, 123, 255, 0.5)"}
                    onBlur={(e) => e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)"}
                  />
                </td>
                <td className="fw-bold text-success">{(formState[`DOP${d}`] || 0) * d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-danger d-block mx-auto mt-3 px-4 py-2 fw-bold" onClick={onResetForm}>
        Limpiar
      </button>

      <button className="btn btn-primary d-block mx-auto mt-3 px-4 py-2 fw-bold" onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  );
};