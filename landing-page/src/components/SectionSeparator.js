import React from 'react';
import '../assets/css/SectionSeparator.css';

const SectionSeparator = () => {
  return (
    <section id="sep-center-1" className="section-sep sep-center text-center light">
      <div className="container">
        <div className="row">
          <div className="col-12 ml-auto mr-auto">
            <div className="content-box d-inline-block bg-default padding-x2 shadow rounded-circle aos-init aos-animate" data-aos="fade-down" data-aos-once="true">
              <a href="#root" className="section-sep">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" height="64" viewBox="0 0 64 64" width="64" className="icon">
                  <path d="m31 0v60.586l-7.293-7.293-1.414 1.561 9 9.146h1.414l9-9.146-1.414-1.488-7.293 7.22v-60.586z"></path>
                </svg>
              </a>
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

export default SectionSeparator;
