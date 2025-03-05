import { useState } from 'react';
import { TablaDop } from "./TablaDop";
import '../css/FormPrep.css'; // Agrega un archivo CSS para los estilos

export const FormPrep = ({ valija }) => {
  const [formData, setFormData] = useState({
    cliente: '',
    cajaOSello: '',
    ubicacion: '',
    monto: '',
    moneda: '',
    cheque: '',
    total: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Formulario de Preparación - Valija {valija}</h2>
        </div>

        <div className="form-group">
          <label htmlFor="cliente">Cliente</label>
          <input
            type="text"
            id="cliente"
            name="cliente"
            value={formData.cliente}
            onChange={handleChange}
            required
            placeholder="Ingrese el nombre del cliente"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cajaOSello">Caja o Sello</label>
          <input
            type="text"
            id="cajaOSello"
            name="cajaOSello"
            value={formData.cajaOSello}
            onChange={handleChange}
            required
            placeholder="Caja o Sello"
          />
        </div>

        <div className="form-group">
          <label htmlFor="ubicacion">Ubicación</label>
          <input
            type="text"
            id="ubicacion"
            name="ubicacion"
            value={formData.ubicacion}
            onChange={handleChange}
            required
            placeholder="Ubicación"
          />
        </div>

        <div className="form-group">
          <label htmlFor="monto">Monto</label>
          <input
            type="number"
            id="monto"
            name="monto"
            value={formData.monto}
            onChange={handleChange}
            required
            placeholder="Monto"
          />
        </div>

        <div className="form-group">
          <label htmlFor="moneda">Moneda</label>
          <input
            type="text"
            id="moneda"
            name="moneda"
            value={formData.moneda}
            onChange={handleChange}
            required
            placeholder="Moneda"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cheque">Cheque</label>
          <input
            type="text"
            id="cheque"
            name="cheque"
            value={formData.cheque}
            onChange={handleChange}
            required
            placeholder="Número de Cheque"
          />
        </div>

        <div className="form-group">
          <label htmlFor="total">Total</label>
          <input
            type="number"
            id="total"
            name="total"
            value={formData.total}
            onChange={handleChange}
            required
            placeholder="Total"
          />
        </div>

        <TablaDop />

        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
};