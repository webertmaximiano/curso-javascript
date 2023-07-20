import React from 'react';

const WhatsAppButton = () => {
  const buttonStyle = {
    position: 'absolute',
    width: '60px',
    height: '60px',
    top: '25px',
    right: '40px',
    justifyContent: 'center', // Centralizar horizontalmente
    alignItems: 'center', // Centralizar verticalmente
    backgroundColor: '#25d366',
    color: '#fff',
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: '30px',
    boxShadow: '1px 1px 2px #888',
    zIndex: '1000'
  };

  const iconStyle = {
    marginTop: '16px',
    color: '#fff'
  };

  return (
    <div style={buttonStyle}>
      <a
        href="https://api.whatsapp.com/send?1=pt_BR&phone=5524999827813"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp" style={iconStyle}></i>
      </a>
    </div>
  );
};

export default WhatsAppButton;
