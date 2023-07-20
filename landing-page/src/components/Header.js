import React from 'react';
import backgroundImage from '../assets/images/buckinghambg1.jpg'; // Importe a imagem aqui
import '../assets/css/Header.css'; // Importe o arquivo CSS do componente

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <header id="header-text" className="pt-75 pb-75 text-center dark pb-sm-150 pb-lg-150 pt-lg-100">
      <div className="container">
        <div className="row">
          <div className="col-10 mr-auto ml-auto">
            <h4 className="hidden-sm" style={{ fontFamily: 'Montserrat' }}>
              <strong className="">
                <span className="text-uppercase">TORNE-SE UM DISTRIBUIDOR BUCKINGHAM PERFUMES E</span>
              </strong>
            </h4>
            <h2 className="mb-md-20 mb-20" style={{ fontFamily: 'Montserrat' }}>
              <b className="">
                <span>CONQUISTE SUA LIBERDADE FINANCEIRA!</span>
              </b>
            </h2>
            <h4 className="mb-md-20 mb-10" style={{ fontFamily: 'Montserrat', color: '#fff' }}>
              Chegou a hora de você mudar de vida e conquistar o que você merece.
              Clique neste botão e faça seu cadastro para começar a construir seu negócio com a Buckingham Parfums:
              <br />
            </h4>
          </div>
          <div className="col-md-8 ml-auto mr-auto">
            <a
              href="https://escritorio.buckinghamoficial.com.br/novo/nathanaguia"
              className="btn btn-lg btn-primary text-center fx-btn-blick fx-btn-3d btn-block fx-btn-pill mt-20 fx-btn-zoom mb-30 smooth"
              style={{
                whiteSpace: 'normal',
                backgroundColor: '#ffac00',
                fontFamily: 'Raleway',
                padding: '25px',
                fontSize: '22px'
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>
                CADASTRAR AGORA
              </b>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-wrap">
        <div className="bg-header" style={headerStyle}></div>
      </div>
    </header>
  );
};

export default Header;
