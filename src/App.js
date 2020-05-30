import React from 'react';
import './index.css';
import ControlledExpansionPanels from './component/form';
import FormApp from './component/formApp';
import Header from './component/header';
import SectionOne from './component/sectionone';
import SectionTwo from './component/sectiontwo';
import SectionThree from './component/sectionthree';

function App() {

  return (
    <div className="App">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />      
      <section className="sectionfour">
        <div className="container p-5">
          <ControlledExpansionPanels />
          <FormApp />
        </div>
      </section>
      <section className="sectionfive">
        <div className="container-fluid">
          <div className="row">
            <div className="d-flex align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-3">
                <h3>Medellín</h3>
                <p>Calle 19A # 44-25 Local 206 Edificio Salud y Servicios.</p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-3">
                <h3>Rionegro</h3>
                <p>Carrera 55 A #35- 2027, piso 4 Cs 402-404  Torre 2, City Médica.</p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 p-0">
                <iframe src="https://maps.google.com/maps?q=Neumomed&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" aria-label="Neumomed"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-center">
        <div><a className="text-white" href="https://neumomed.com/#/" rel="nofollow">Neumomed</a> | Todos los derechos reservados 2020</div>
      </footer>
    </div >
  );
}

export default App;
