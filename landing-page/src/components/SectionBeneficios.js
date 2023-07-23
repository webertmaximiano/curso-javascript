import React from 'react';
import '../assets/css/SectionBeneficios.css';
import familiaSvg from '../assets/images/familia.svg';
import viagemSvg from '../assets/images/viagem.svg';
import dinheiroSvg from '../assets/images/dinheiro.svg';

const SectionBeneficios = () => {
  return (
    <section id="benefits-3col-3" className="pt-50 text-center light pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 style={{ fontFamily: 'Raleway', color: '#000' }}>
              <strong>Antes de mais nada, eu quero que você</strong>
            </h4>
            <h2 className="mt-0" style={{ fontFamily: 'Montserrat', color: '#490a0d' }}>
              <strong>Pense no Seguinte...</strong>
            </h2>
          </div>
          <div className="col-lg-4">
            <div className="content-box mb-20">
              <img src={familiaSvg} alt="Ícone Família" />
              <h4 className="mb-20 text-center">
                <strong>Você está investindo tempo suficiente com sua família?</strong>
              </h4>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="content-box mb-20">
                <img src={viagemSvg} alt="Ícone Viagem" />
                <h4 className="mb-20 text-center">
                <strong>Você tem viajado o quanto gostaria?</strong>
                </h4>
            </div>
          </div>
          <div className="col-lg-4">
                <div className="content-box mb-20">
                    <img src={dinheiroSvg} alt="Ícone Dinheiro" />
                    <h4 className="mb-20 text-center">
                    <strong>Você se sente financeiramente estável?</strong>
                    </h4>
                </div>
         </div>
        </div>
      </div>
      <div className="bg-wrap">
        <div className="bg"></div>
      </div>
    </section>
    
  );
};

export default SectionBeneficios;
