import React, { useEffect } from "react";
import {gsap} from 'gsap';

const Inicio = () => {
  
  useEffect(() => {
    const boton = document.querySelector('.background-amarillo')
    gsap.from(boton, {
      opacity: 0,
      y: -500,
      duration: 3
    })
    const titulo1 = document.querySelectorAll('.titulo1')
    gsap.from(titulo1, {
      opacity: 0,
      y: -500,
      duration: 3
    })
  })
 
  return (
    <div className="row justify-content-center">
      <div
        id="carouselExampleCaptions"
        className="carousel slide col-lg-8"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active bg-dark"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            className="bg-dark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row align-items-center text-center">
              <div className="col-6">
                <h2 className="h3 fw-bolder titulo1">COMPRA TU TAXI</h2>
                <h2 className="small d-none d-sm-none d-md-block titulo1">
                  Con nuestras financieras solo tienes que tener una cuota
                  inicial para llevarte tu taxi nuevo o usado.
                </h2>
                <button className="btn background-amarillo bg-success fw-bolder mx-auto">
                  VER MAS
                </button>
              </div>

              <div className="col-6">
                <img src="./img/svg1.png" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row align-items-center text-center">
              <div className="col-6">
                <img src="./img/svg.png" className="d-block w-100" alt="..." /* width="491px" height="491px" */ />
              </div>
              <div className="col-6">
                <h2 className="h3 fw-bolder">CONDUCE CON NOSOTROS</h2>
                <h2 className="small d-none d-sm-none d-md-block">
                  ¿Estas en buscade empleo? No lo dudes mas y haz parte de
                  nuestro grupo selecto de conductores.
                </h2>
                <button className="btn background-verde bg-warning fw-bolder">
                  VER MAS
                </button>
              </div>
            </div>
          </div>
          {/*
          <div className="carousel-item">
            <img src="./img/img-3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <h5 className="text-dark">COMPRA TU TAXI </h5>
                    <h5 className="text-dark">NUEVO O USADO</h5>
                    <button className="btn background-amarillo">VER MAS</button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon text-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon text-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Seccion de vehiculos en venta */}
      <section>
        <div class="card bg-dark text-white">
          <img class="card-img" src="holder.js/100x180/" alt=""></img>
          <div class="card-img-overlay">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Text</p>
          </div>
        </div>
      </section>

      {/* Section de Noticias */}
      <section>
        <div className="container">
          <div className="row text-center mb-4">
            <div className="col">
              <div class="card text-left">
                <a href="/concesionario">
                  <img class="card-img-top" src="./img/gif1.gif" alt=""></img>
                </a>
                <div className="card-body">
                  <h4 className="class-title small d-none d-sm-none d-md-none d-lg-block">
                    Aqui obtendras mas informacion acerca de tu compra tambien
                    podras comunicarte con un agente de ventas para recibir la
                    mejor asesoria al momento de hacer efectiva tu compra.
                  </h4>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card text-left">
                <a href="/administradora">
                  <img class="card-img-top" src="./img/gif2.gif" alt=""></img>
                </a>
                <div class="card-body">
                  <h4 class="card-title small d-none d-sm-none d-md-none d-lg-block">
                    Haz parte de nuestro equipo, si eres conductor de hace mas
                    de un año, conoces la ciudad, tu presentacion es la
                    adecuada, conoces Bogota y tienes un buen trato con el
                    usuario no dudes en postularte.
                  </h4>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card text-left">
                <a href="/contacto">
                  <img class="card-img-top" src="./img/gif3.gif" alt=""></img>
                </a>
                <div class="card-body">
                  <h4 class="card-title small d-none d-sm-none d-md-none d-lg-block">
                    Cnoce mas acerca de nuestra empresa, quienes somos,
                    ubicacion y mas detalles.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
