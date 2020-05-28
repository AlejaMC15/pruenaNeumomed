import React from 'react';
import './index.css';
import Logo from './component/RecursoWeb/Logo-Oficial.png';
import Banner1 from './component/RecursoWeb/Banner 1.jpg';
import Banner2 from './component/RecursoWeb/Banner 2.jpg';
import Banner3 from './component/RecursoWeb/Banner 3.jpg';
import Banner4 from './component/RecursoWeb/Banner 4.jpg';
import Banner5 from './component/RecursoWeb/Banner 5.jpg';
import Banner6 from './component/RecursoWeb/Banner 6.jpg';
import _MG_5091 from './component/RecursoWeb/_MG_5091.JPG';


function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <img src={Logo} width="107" height="69" className="d-inline-block align-top img-fluid" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <a className="nav-item nav-link text-primary" href="#">INICIO <span className="sr-only">(current)</span></a>
            <div className="navbar-nav">
              <a className="nav-item nav-link text-primary" href="#">FORMULARIO <span className="sr-only">(current)</span></a>
            </div>
          </div>
        </nav>
      </header>
      <section className="sectionone">
        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
          <a href="https://www.youtube.com/channel/UCf_U0-K7i3qnRTlGci7z1yQ?view_as=subscriber" target="_blank">
            <div class="carousel-inner">
              <div class="carousel-item active" data-interval="10000">
                <img src={Banner1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-interval="2000">
                <img src={Banner2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Banner3} class="d-block w-100" alt="..." />
              </div>
            </div>
          </a>
          <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
      <section className="sectiontwo">
        <div className="container d-flex justify-content-cetner">
          <div className="row">
            <div className="col-sm">
              <div className="linea"></div>
              <h6>NEUMOMED</h6>
              <h1>Neumomed IPS</h1>
              <p>Ofrece una atención integral a pacientes con enfermedades respiratorias y trastornos del sueño</p>
            </div>
            <div className="col-sm">
              <img className="img-fluid img-responsive" id="_MG_5091" src={_MG_5091} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="sectionthree">
        <div class="container justify-content-center">
          <div class="row">
            <div class="col-sm">
              <span></span>
              <h3>Programas</h3>
              <ul>
                <li>Programa de EPOC y ASMA</li>
                <li>Programa de SAHOS</li>
                <li>Programa Dejar de Fumar</li>
              </ul>
            </div>
            <div class="col-sm">
              <span></span>
              <h3>Terapias</h3>
              <ul>
                <li>Rehabilitación Pulmonar</li>
                <li>Terapia Miofuncional Orofacial</li>
                <li>Terapia Cognitivo Conductual</li>
              </ul>
            </div>
            <div class="col-sm">
              <span></span>
              <h3>Consultas</h3>
              <ul>
                <li>Consulta de Neumología</li>
                <li>Consulta de Nutrición</li>
                <li>Consulta de Psicología</li>
              </ul>
            </div>
          </div>
        </div>        
      </section>
      <section className="sectionfour">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <h3>Medellín</h3>
              <p>Calle 19A # 44-25 Local 206 Edificio Salud y Servicios.</p>
            </div>
            <div class="col-sm">
              <h3>Rionegro</h3>
              <p>Carrera 55 A #35- 2027, piso 4 Cs 402-404  Torre 2, City Médica.</p>
            </div>
            <div class="col-sm">
            <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=Neumomed&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" aria-label="Neumomed"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
