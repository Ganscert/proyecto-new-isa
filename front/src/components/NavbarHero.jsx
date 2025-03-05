
import { NavLink } from "react-router";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        
        {/* LOGO */}
        <NavLink className="navbar-brand" to="/home">
          <img src="/src/assets/image.png" alt="Logo" height="50" />
        </NavLink>

        {/* BOTÓN TOGGLE PARA MÓVILES */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* CONTENIDO DEL NAVBAR */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{marginLeft:"30%"}}>
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/recepcion">Recepción</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/preparacion">Preparación</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/reports">Reports</NavLink>
            </li>
          </ul>

          {/* BOTÓN CUENTA */}
          <div className="d-flex align-items-center ms-auto" style={{marginRight:"30px"}}>
            <NavLink to="/cuenta" className="btn btn-outline-light">Cuenta</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};