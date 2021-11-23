import React from "react";
import { NavLink, Link } from "react-router-dom";
import { UsuarioContext } from "../../../context/UsuarioProvider";
import { withRouter } from "react-router-dom";

const NavbarAdmin = (props) => {
    const { usuario, cerrarSesion } =
    React.useContext(UsuarioContext);

    const closeSession = () => {
      cerrarSesion()
      props.history.push('/')
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <h3>
              {
                usuario.rol
              }
            </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/conductores" exact>
                  Conductores
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/vehiculos">
                  Vehiculos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/taller">
                  Taller
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/bodega">
                  Bodega
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aconsolamiento">
                  Alistamiento
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/notas">
                  Notas
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <button
                className="btn bg-danger font-weight-bold"
                onClick={closeSession}
              >
                Cerrar Sesion
              </button>
            </div>
            {/* <div>
            <div className="">
              <NavLink className="btn btn-dark mr-2" to="/" exact>
                Inicio
              </NavLink>
              <NavLink className="btn btn-dark mr-2" to="/admin">
                Admin
              </NavLink>
              <NavLink className="btn btn-dark" to="/login">
                Login
              </NavLink>
            </div>
          </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(NavbarAdmin);
