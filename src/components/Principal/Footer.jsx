import React from "react";


const Footer = () => {
  return (
    <div className="bg-dark pt-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="./img/a1.png" alt="" width="150px" />
          </div>
          <div className="col">
            <ul>
              <li className="list-unstyled text-white font-weight-bold">
                SERVICIOS
              </li>
              <a href="/concesionario">
                <li className="list-unstyled text-white small">
                  Concesionario
                </li>
              </a>
              <a href="/concesionario">
                <li className="list-unstyled text-white small">
                  Administradora
                </li>
              </a>
              <a href="/concesionario">
                <li className="list-unstyled text-white small">
                  Quienes Somos
                </li>
              </a>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li className="list-unstyled text-white font-weight-bold">
                REDES SOCIALES
              </li>
              <li className="d-flex justify-content-between mt-3">
                <a href="/concesionario" className="h3">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="/concesionario" className="h3">
                  <i class="fab fa-instagram-square text-secondary"></i>
                </a>
                <a href="/concesionario" className="h3">
                  <i class="fab fa-youtube text-danger"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row text-center text-light bg-black">
          <div className="col small">
            Sitio Web Diseñado por <a href="https://www.maicolaristizabal.com.co">Maicol Aristizabal</a>
          </div>
        </div>
    </div>
  );
};

export default Footer;
