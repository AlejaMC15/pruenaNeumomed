import React from 'react';
import Logo from './RecursoWeb/Logo-Oficial.png';

function Header() {

    return (

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
                            <a className="nav-item nav-link text-primary font-weight-bold" href="...">FORMULARIO <span className="sr-only">(current)</span></a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

    );
}

export default Header;

