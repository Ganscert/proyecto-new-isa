import { NavLink } from "react-router";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">NEW-ISA</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/recepcion">Recepcion</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
