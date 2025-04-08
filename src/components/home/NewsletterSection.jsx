import React from 'react';

const NewsletterSection = () => {
  return (
    <section id="call-to-action" className="call-to-action section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="cta-content" data-aos="fade-up" data-aos-delay="200">
              <h2>Subscribe to our newsletter</h2>
              <p>
                Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur
                aliquet quam id dui posuere blandit.
              </p>
              <form 
                action="forms/newsletter.php" 
                method="post" 
                className="php-email-form cta-form"
                data-aos="fade-up" 
                data-aos-delay="300"
              >
                <div className="input-group mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Email address..."
                    aria-label="Email address" 
                    aria-describedby="button-subscribe"
                  />
                  <button className="btn btn-primary" type="submit" id="button-subscribe">
                    Subscribe
                  </button>
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your subscription request has been sent. Thank you!</div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cta-image" data-aos="zoom-out" data-aos-delay="200">
              <img src="/img/cta/cta-1.webp" alt="" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;