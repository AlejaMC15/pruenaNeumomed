import React from 'react';
import Banner1 from './RecursoWeb/Banner 1.jpg';
import Banner3 from './RecursoWeb/Banner 3.jpg';
import Banner4 from './RecursoWeb/Banner 4.jpg';
import Banner5 from './RecursoWeb/Banner 5.jpg';
import Banner6 from './RecursoWeb/Banner 6.jpg';

function SectionOne() {

    return (

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

    );

}

export default SectionOne;