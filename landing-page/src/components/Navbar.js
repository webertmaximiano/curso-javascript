import React from 'react';
import logo from "../assets/buckinghamlogo.png";
import WhatsAppButton from './WhatsAppButton';
import '../assets/css/Navbar.css';

const Navbar = () => {
  const colClasses = "col-md-10 mr-auto ml-auto text-center mw-100 mt-10 mb-10";
  const imgClasses = "lazyload mw-100 mt-10 mb-10";

  return (
    <nav id="nav-list-logo-btn" className="navbar dark shadow">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className={colClasses}>
            <a className="navbar-brand smooth" href="index.html" target="_self">
              <img
                height="90px"
                className={imgClasses}
                src={logo}
                data-original={logo}
                alt="logotipo"
                srcSet=""
                style={{ display: 'inline' }}
              />
            </a>
          </div>
        </div>
        <div className="col-md-2 text-right">
        <WhatsAppButton /> 
        </div>
      </div>
      <div className="bg-wrap">
        <div className="bg"></div>
      </div>
      
    </nav>
  );
};

export default Navbar;
