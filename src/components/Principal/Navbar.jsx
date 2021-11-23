import React from "react";
import { Link, NavLink } from "react-router-dom";
import { UsuarioContext } from "../../context/UsuarioProvider";

const Navbar = () => {
  const { usuario, iniciarSesion, cerrarSesion } =
    React.useContext(UsuarioContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h3>
            <span className="text-warning">INVER</span>
            <span className="text-success">TAXI</span>
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
              <NavLink className="nav-link" to="/" exact>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/concesionario">
                Concesionario
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/administradora">
                Administradora
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                Contacto
              </NavLink>
            </li>
            {usuario.email ? (
              <li className="nav-item">
                <NavLink className="btn btn-warning" to="/administrar">
                  Administrar
                </NavLink>
              </li>
            ) : (
              <button className="d-none">

              </button>
            )}
          </ul>
          <div className="d-flex">
            {usuario.email ? (
              <button
                className="btn bg-danger font-weight-bold"
                onClick={cerrarSesion}
              >
                Cerrar Sesion
              </button>
            ) : (
              <button
                className="btn bg-success font-weight-bold"
                onClick={iniciarSesion}
              >
                Ingresar
              </button>
            )}
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
  );
};

export default Navbar;
