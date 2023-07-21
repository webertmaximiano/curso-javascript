import React from 'react';
import homemCansadoImg from '../assets/images/homem_cansado.jpg';
import idosaTrabalhandoImg from '../assets/images/idosa_trabalhando.jpg';
import idosoPreocupadoImg from '../assets/images/idoso_preocupado.jpg';
import '../assets/css/SectionGaleria.css';

const SectionGaleria = () => {
    return (
      <section id="benefits-3col-counter-2" className="counter-up light pt-30 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="text-center mb-20" style={{ color: '#490a0d', fontFamily: 'Montserrat' }}>
                <b>Se você respondeu "NÃO" para qualquer uma dessas perguntas...</b>
              </h2>
              <h4 className="text-center mb-20" style={{ color: '#000' }}>
                <span>Você não está vivendo a vida que merece. Seu potencial ainda não foi alcançado... E o agora é sempre o melhor momento para agir e começar a mudança de vida para melhor que você merece!</span>
              </h4>
              <h3 className="text-center mb-50" style={{ color: '#490a0d' }}>
                <strong>A maioria das pessoas se conforma e...</strong>
              </h3>
            </div>
            <div className="col-md">
              <div className="content-box d-inline-block mb-10">
                <div className="position-absolute r-0 t-0 padding"></div>
                <img className="mw-100 mb-20 lazyload" src={homemCansadoImg} data-original={homemCansadoImg} alt="img" srcSet="" style={{ display: 'inline' }} />
                <h4 style={{ color: '#000' }}>
                  <span>Trabalham</span>
                </h4>
                <h3 style={{ color: '#490a0d' }}>
                  <span>
                    <b>40 horas</b>
                    <br />
                    por semana
                  </span>
                </h3>
              </div>
            </div>
            <div className="col-md">
              <div className="content-box d-inline-block mb-10">
                <div className="position-absolute r-0 t-0 padding"></div>
                <img className="mw-100 mb-20 lazyload" src={idosaTrabalhandoImg} data-original={idosaTrabalhandoImg} alt="img" srcSet="" style={{ display: 'inline' }} />
                <h4 style={{ color: '#000' }}>
                  <span>durante</span>
                </h4>
                <h3 style={{ color: '#490a0d' }}>
                  <b>40</b>
                  <span>
                    longos anos
                    <br />
                    de suas vidas
                  </span>
                </h3>
              </div>
            </div>
            <div className="col-md">
              <div className="content-box d-inline-block mb-0">
                <div className="position-absolute r-0 t-0 padding"></div>
                <img className="mw-100 mb-20 lazyload" src={idosoPreocupadoImg} data-original={idosoPreocupadoImg} alt="img" srcSet="" style={{ display: 'inline' }} />
                <h4 style={{ color: '#000' }}>
                  <span>Para apostar com</span>
                </h4>
                <h3 style={{ color: '#490a0d' }} className="mb-0">
                  <b>40% </b>
                  <span>do que não</span>
                  <br />
                  <span>é suficiente</span>
                </h3>
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
  
  export default SectionGaleria;