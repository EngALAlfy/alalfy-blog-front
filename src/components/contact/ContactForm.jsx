import React from 'react';
import FormInput from './FormInput';

const ContactForm = () => {
  const serviceOptions = [
    { value: 'blog', label: 'Blog' },
    { value: 'development', label: 'Development' },
    { value: 'yostore', label: 'YoStore' },
    { value: 'yotech', label: 'YoTech' }
  ];

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="form-wrapper" data-aos="fade-up" data-aos-delay="400">
          <form action="/" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col-md-6 form-group">
                <FormInput
                  name="name"
                  placeholder="Your name*"
                  icon="person"
                  required={true}
                />
              </div>
              <div className="col-md-6 form-group">
                <FormInput
                  type="email"
                  name="email"
                  placeholder="Email address*"
                  icon="envelope"
                  required={true}
                />
              </div>
            </div>
            
            <div className="row mt-3">
              <div className="col-md-6 form-group">
                <FormInput
                  name="phone"
                  placeholder="Phone number*"
                  icon="phone"
                  required={true}
                />
              </div>
              <div className="col-md-6 form-group">
                <FormInput
                  type="select"
                  name="subject"
                  placeholder="Select service*"
                  icon="list"
                  required={true}
                  options={serviceOptions}
                />
              </div>
              
              <div className="form-group mt-3">
                <FormInput
                  type="textarea"
                  name="message"
                  placeholder="Write a message*"
                  icon="chat-dots"
                  required={true}
                  rows={6}
                />
              </div>
              
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              
              <div className="text-center">
                <button type="submit">Submit Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
