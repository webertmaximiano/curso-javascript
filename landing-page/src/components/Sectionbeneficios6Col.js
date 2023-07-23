import React from 'react';

import bracoSvg from '../assets/images/braco.svg';
import financasSvg from '../assets/images/financas.svg';
import vidaSvg from '../assets/images/vida.svg';
import familia2Svg from '../assets/images/familia2.svg';
import handsSvg from '../assets/images/hands.svg';
import diamanteSvg from '../assets/images/diamante.svg';

import '../assets/css/SectionBeneficios6Col.css';

const SectionBeneficios6Col = () => {
    return (
        <section id="benefits-6col-2--1" className="text-center light pt-100 pb-50 pt-lg-150 pt-sm-150"> 
            <div className="container"> 
                <div className="row"> 
                    <div className="col-lg-12"> 
                        <h2>
                            <strong className="">
                                <font>
                                    <font>
                                    Por que empreender com a Buckingham?
                                    </font>
                                </font>
                                <br/>
                            </strong>
                        </h2> 
                        <p className="text-secondary lead mb-50">
                            <b className="">
                                <font>
                                    <font>
                                    Com a Buckingham você vende produtos de alta qualidade com 100% de lucro e ainda muda de vida:
                                    </font>
                                </font>
                            </b>
                        </p> 
                    </div>
                    <div className="col-lg-2 col-md-4"> 
                        <div className="content-box mb-75"> 
                            <img src={bracoSvg} alt="Ícone Braco" />
                            <p >
                                <b className="">
                                    <font >
                                        <font >
                                         Independência 
                                        </font>
                                    </font>
                                    <br/>
                                    <font >
                                        <font >
                                        &nbsp;Financeira
                                        </font>
                                    </font>
                                </b>
                            </p> 
                        </div> 
                    </div>
                    <div className="col-lg-2 col-md-4"> 
                        <div className="content-box mb-75"> 
                            <img src={financasSvg} alt="Ícone Financas" />
                            <p >
                                <b className="">
                                    <font >
                                        <font >
                                        Segurança para o
                                        </font>
                                    </font>
                                    <br/>
                                    <font >
                                        <font >
                                        &nbsp;Futuro
                                        </font>
                                    </font>
                                </b>
                            </p> 
                        </div> 
                    </div>
                    <div className="col-lg-2 col-md-4"> 
                        <div className="content-box mb-75"> 
                            <img src={vidaSvg} alt="Ícone Qualidade de Vida" />
                            <p>
                                <b className="">
                                    <font>
                                        <font>
                                            Qualidade 
                                        </font>
                                    </font>
                                    <br/>
                                    <font>
                                        <font>
                                        &nbsp;de vida
                                        </font>
                                    </font>
                                </b>
                            </p> 
                        </div> 
                    </div> 
                    <div className="col-lg-2 col-md-4"> 
                        <div className="content-box mb-75">
                            <img src={familia2Svg} alt="Ícone Familia" />
                            <p >
                                <strong className="">
                                    <font >
                                        <font >
                                        Tempo Livre 
                                        </font>
                                    </font>
                                    <br/>
                                    <font >
                                        <font >
                                        Para sua Família
                                        </font>
                                    </font>
                                </strong>
                            </p> 
                        </div> 
                    </div> 
                    <div className="col-lg-2 col-md-4">
                        <div className="content-box mb-75" >
                            <img src={handsSvg} alt="Ícone Familia" />
                            <p >
                                <strong className="">
                                    <font >
                                        <font >
                                            Ajudar&nbsp; 
                                        </font>
                                    </font>
                                    <br/>
                                    <font >
                                        <font >
                                            Pessoas
                                        </font>
                                    </font>
                                </strong>
                            </p> 
                        </div>
                    </div> 
                    <div className="col-lg-2 col-md-4"> 
                        <div className="content-box mb-75"> 
                        <img className="diamante" src={diamanteSvg} alt="Ícone Diamante" />
                        <p >
                            <strong className="">
                                <font>
                                    <font>
                                        Realizar 
                                    </font>
                                </font>
                                <br/>
                                <font >
                                    <font >
                                        Seus Sonhos
                                    </font>
                                </font>
                            </strong>
                        </p> 
                    </div> 
                    </div> 
                </div> 
            </div> 
            <div className="bgSection6Col"> 
                <div className="bgSection6Col">
                </div> 
            </div>
        </section>
    );
};
    
export default SectionBeneficios6Col;