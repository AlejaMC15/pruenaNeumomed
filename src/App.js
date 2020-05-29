import React from 'react';
import './index.css';
import Form from './component/formApp';
import $ from 'jquery';
import Logo from './component/RecursoWeb/Logo-Oficial.png';
import Banner1 from './component/RecursoWeb/Banner 1.jpg';
import Banner3 from './component/RecursoWeb/Banner 3.jpg';
import Banner4 from './component/RecursoWeb/Banner 4.jpg';
import Banner5 from './component/RecursoWeb/Banner 5.jpg';
import Banner6 from './component/RecursoWeb/Banner 6.jpg';
import _MG_5091 from './component/RecursoWeb/_MG_5091.JPG';
import IconWhatsapp from './component/RecursoWeb/iconwhatsapp.png';


function App() {

  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#whatsapp').fadeIn();
      } else {
        $('#whatsapp').fadeOut();
      }
    });
  });

  return (
    <div className="App">
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="...">
              <img src={Logo} width="109" height="69" className="d-inline-block align-top img-fluid ml-0" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end mr-0" id="navbarNavAltMarkup">
              <a className="nav-item nav-link text-primary font-weight-bold" href="...">INICIO <span className="sr-only">(current)</span></a>
              <div className="navbar-nav">
                <a className="nav-item nav-link text-primary font-weight-bold" href="...">FORMULARIO <Form /><span className="sr-only">(current)</span></a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className="sectionone">
        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
          <a href="https://www.youtube.com/channel/UCf_U0-K7i3qnRTlGci7z1yQ?view_as=subscriber" target="_blank" rel="noopener noreferrer">
            <div className="carousel-inner">
              <div className="carousel-item active" data-interval="10000">
                <img src={Banner1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-interval="10000">
                <img src={Banner3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-interval="10000">
                <img src={Banner4} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-interval="10000">
                <img src={Banner5} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-interval="10000">
                <img src={Banner6} className="d-block w-100" alt="..." />
              </div>
            </div>
          </a>
          <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      <section className="sectiontwo">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="lineone"><br />
                <h6>NEUMOMED</h6>
                <h1 className="titleNeumomed text-left font-weight-bold">Neumomed IPS</h1>
                <p className="textone">Ofrece una atención integral a pacientes con enfermedades respiratorias y trastornos del sueño.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <img className="img-fluid" src={_MG_5091} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="sectionthree">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="mdc-card demo-card">
                <div className="mdc-card-wrapper__text-section">
                  <div className="demo-card__title text-primary font-weight-bold">Programas</div>
                  <div className="demo-card__subhead">
                    <ul>
                      <li>Programa de EPOC y ASMA</li>
                      <li>Programa de SAHOS</li>
                      <li>Programa Dejar de Fumar</li>
                    </ul>
                  </div>
                </div>
              </div>              
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="mdc-card demo-card">
                <div className="mdc-card-wrapper__text-section">
                  <div className="demo-card__title text-primary font-weight-bold">Terapias</div>
                  <div className="demo-card__subhead">
                    <ul>
                      <li>Rehabilitación Pulmonar</li>
                      <li>Terapia Miofuncional Orofacial</li>
                      <li>Terapia Cognitivo Conductual</li>
                    </ul>
                  </div>
                </div>
              </div>              
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 justify-content-center">
              <div className="mdc-card demo-card">
                <div className="mdc-card-wrapper__text-section">
                  <div className="demo-card__title text-primary font-weight-bold">Consultas</div>
                  <div className="demo-card__subhead">
                    <ul>
                      <li>Consulta de Neumología</li>
                      <li>Consulta de Nutrición</li>
                      <li>Consulta de Psicología</li>
                    </ul>
                  </div>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </section>
      <section className="sectionfour">
        <div class="container justify-content-left display-block">
          <div class="row">
            <div class="col-sm">
              <div className="container justify-content-center">
                <div className="row">
                  <div className="col-sm">
                    <h3>Medellín</h3>
                    <p>Calle 19A # 44-25 Local 206 Edificio Salud y Servicios.</p>
                  </div>
                  <div className="col-sm">
                    <h3>Rionegro</h3>
                    <p>Carrera 55 A #35- 2027, piso 4 Cs 402-404  Torre 2, City Médica.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=Neumomed&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" aria-label="Neumomed"></iframe>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-center">
        <div><a className="text-white" href="https://neumomed.com/#/" rel="nofollow">Neumomed</a> | Todos los derechos reservados 2020</div>
      </footer>
      <div id="whatsapp">
        <a href="https://api.whatsapp.com/send?phone=573508872241&text=Hola%20Neumomed%2C%20quiero%20pedir%20una%20cita." target="_blank" rel="noopener noreferrer">
          <img src={IconWhatsapp} title="Escríbenos por Whastapp" alt="Escríbenos por Whastapp" />
        </a>
      </div>
    </div >
  );
}

export default App;
