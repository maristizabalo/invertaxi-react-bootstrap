import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../../../firebase";

const Conductores = () => {
  const [consola, setconsola] = useState([]);
  const getConsola = async () => {
    db.collection("consola_conductores").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setconsola(docs);
    });
  };
  useEffect(() => {
    getConsola();
  }, []);
  return (
    <div>
      <div className="container py-3">
        <input
          type="text"
          name=""
          id=""
          className="input"
          placeholder="Buscar placa o vehiculo"
        />
      </div>
      <div className="container">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Movil</th>
              <th scope="col">Placa</th>
              <th scope="col">Conductor Diurno</th>
              <th scope="col">Celular Diurno</th>
              <th scope="col">Conductor Nocturno</th>
              <th scope="col">Celular Nocturno</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {consola.map((consola) => {
              return (
                <>
                  <tr>
                    <td>{consola.MOVIL}</td>
                    <td>{consola.PLACA}</td>
                    <td>{consola.NOMBRE_DIURNO}</td>
                    <td>{consola.CELULAR1_DIURNO}</td>
                    <td>{consola.NOMBRE_NOCTURNO}</td>
                    <td>{consola.CELULAR1_DIURNO}</td>
                    <td>
                      <a onClick=""><i class="fas fa-edit text-warning h5">Editar</i></a>
                    </td>
                  </tr>
                </>
              );
            })}
            {/* <th></th>
      <th scope="row">{consola.map((consola) => {
          return <h6 key={consola.id}></h6>;
        })}</th>
      <td>{consola.map((consola) => {
          return <h6 key={consola.id}>{consola.PLACA}</h6>;
        })}</td>
      <td>{consola.map((consola) => {
          return <h6 key={consola.id}>{consola.NOMBRE_DIURNO}</h6>;
        })}</td>
        <td>{consola.map((consola) => {
          return <h6 key={consola.id}>{consola.CELULAR1_DIURNO}</h6>;
        })}</td>
      <td>{consola.map((consola) => {
          return <h6 key={consola.id}>{consola.NOMBRE_NOCTURNO}</h6>;
        })}</td>
        <td>{consola.map((consola) => {
          return <h6 key={consola.id}>{consola.CELULAR1_NOCTURNO}</h6>;
        })}</td> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Conductores;
