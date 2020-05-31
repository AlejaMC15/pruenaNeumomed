import React from 'react';
import _MG_5091 from './RecursoWeb/_MG_5091.JPG';

function SectionTwo() {
  return (
    <section className="section-two">
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="blue-line">
              <br />
              <h6>NEUMOMED</h6>
              <h1 className="text-left font-weight-bold">Neumomed IPS</h1>
              <p className="">
                Ofrece una atención integral a pacientes con enfermedades
                respiratorias y trastornos del sueño.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <img className="img-fluid" src={_MG_5091} alt="_MG_5091" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
