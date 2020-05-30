import React from 'react';

function SectionFive() {

    return (

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
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 p-0">
                            <iframe src="https://maps.google.com/maps?q=Neumomed&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" aria-label="Neumomed"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}

export default SectionFive;