import React from 'react';
import videoThumbnail from '../assets/images/capa-video-buckigham.jpg';
import '../assets/css/MediaImageText2.css';

const MediaImageText2 = () => {
  return (
    <section id="media-img-text-2" className="text-center light pt-0 pb-30">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-10 ml-auto mr-auto">
            <a href="https://www.youtube.com/watch?v=kq1tc5Eniy4" className="dark video-box mt-sm--200 mt-md--50 mt-lg--100 smooth video-popup mfp-iframe" target="_self">
              <img
                className="shadow mw-100 rounded"
                alt="imagem"
                src={videoThumbnail}
                data-original={videoThumbnail}
                style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 10px 20px', display: 'inline' }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-wrap">
        <div className="bg"></div>
      </div>
    </section>
  );
};

export default MediaImageText2;
