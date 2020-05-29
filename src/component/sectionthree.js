import React from 'react';

function SectionThree() {

    return (

        <section className="sectionthree">
            <div className="container-fluid">
                <div className="row d-flex align-items-center">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="linetwo"></div>
                        <div><h3>Programas</h3></div>
                        <ul>
                            <li>Programa de EPOC y ASMA</li>
                            <li>Programa de SAHOS</li>
                            <li>Programa Dejar de Fumar</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="linetwo"></div>
                        <div><h3>Terapias</h3></div>
                        <ul>
                            <li>Rehabilitación Pulmonar</li>
                            <li>Terapia Miofuncional Orofacial</li>
                            <li>Terapia Cognitivo Conductual</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 justify-content-center">
                        <div className="linetwo"></div>
                        <div><h3>Consultas</h3></div>
                        <ul>
                            <li>Consulta de Neumología</li>
                            <li>Consulta de Nutrición</li>
                            <li>Consulta de Psicología</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section >

    );

}

export default SectionThree;