import React from 'react';

const CallToAction = () => {
  return (
      <section id="call-to-action-2" className="call-to-action-2 section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="advertise-1 d-flex flex-column flex-lg-row gap-4 align-items-center position-relative">
            <div className="content-left flex-grow-1" data-aos="fade-right" data-aos-delay="200">
              <span className="badge text-uppercase mb-2">Need a Developer?</span>
              <h2>Custom Apps, Websites & Systems — Built For Your Business</h2>
              <p className="my-4">
                I'm Islam Alalfy — a full-stack developer specializing in Flutter, Laravel, and scalable tech solutions.
                Whether you're launching a startup, improving your digital presence, or automating operations, I can help turn your vision into a reliable, performant product.
              </p>

              <div className="features d-flex flex-wrap gap-3 mb-4">
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Cross-platform Mobile Apps</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Custom Web Dashboards</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>E-commerce & Admin Panels</span>
                </div>
              </div>

              <div className="cta-buttons d-flex flex-wrap gap-3">
                <a href="https://api.whatsapp.com/send?phone=201153263994" className="btn btn-primary">Get in Touch</a>
                <a href="https://alalfy.com" className="btn btn-outline">View My Work</a>
              </div>
            </div>

            <div className="content-right position-relative" data-aos="fade-left" data-aos-delay="300">
              <img src="/img/call-to-action.jpg" alt="Development Showcase" className="img-fluid rounded-4"/>
              <div className="floating-card">
                <div className="card-icon">
                  <i className="bi bi-code-slash"></i>
                </div>
                <div className="card-content">
                  <span className="stats-number">50+</span>
                  <span className="stats-text">Projects Delivered</span>
                </div>
              </div>
            </div>

            <div className="decoration">
              <div className="circle-1"></div>
              <div className="circle-2"></div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default CallToAction;
