import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarAdmin from "./components/NavbarAdmin";
import Taller from "./components/Taller";
import Vehiculos from "./components/Vehiculos";
import Conductores from "./components/Conductores";

const VistaSupervisor = () => {
  return (
    <div>
      <Router>
        <NavbarAdmin />
        <Switch>
          <Route path="/vehiculos">
            <Vehiculos />
          </Route>
          <Route path="/conductores">
            <Conductores />
          </Route>
          <Route path="/taller">
            <Taller />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default VistaSupervisor;
