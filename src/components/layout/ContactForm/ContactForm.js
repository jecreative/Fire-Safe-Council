import React, { Fragment, useState } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './ContactForm.css';

const ContactForm = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) => {
  const onSubmit = () => {
    this.history.push(
      '',
      () =>
        (window.location.href =
          'https://objective-joliot-10d175.netlify.app/contact')
    );
  };
  return (
    <Fragment>
      <div
        className={
          lightBg ? 'contact__hero-section' : 'contact__hero-section darkBg'
        }
      >
        <div className="container">
          <div
            className="row contact__hero-row"
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          >
            <div className="col">
              <div className="contact__hero-text-wrapper">
                <div className="top-line">{topLine}</div>

                <p
                  className={
                    lightTextDesc
                      ? 'contact__hero-subtitle'
                      : 'contact__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <div className="form-container">
                  <form name="contact" method="post" action="">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        type="message"
                        name="message"
                        placeholder="Message"
                        cols="1"
                        rows="5"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      buttonSize="btn--wide"
                      buttonColor="green"
                      onSubmit={onSubmit}
                    >
                      <Link to="/">{buttonLabel}</Link>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="contact__hero-img-wrapper">
                <img src={img} alt={alt} className="contact__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactForm;
