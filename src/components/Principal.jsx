import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Administradora from "./Principal/Administradora";
import Concesionario from "./Principal/Concesionario";
import Contacto from "./Principal/Contacto";
import Footer from "./Principal/Footer";
import Inicio from "./Principal/Inicio";
import Login from "./Principal/Login";
import Navbar from "./Principal/Navbar";

const Principal = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/concesionario">
            <Concesionario />
          </Route>
          <Route path="/administradora">
            <Administradora />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default Principal;
