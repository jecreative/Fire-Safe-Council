import React, { Fragment } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './ContactForm.css';

function ContactForm({
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
}) {
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
                  <form action="#!">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        type="message"
                        name="message"
                        value="message"
                        placeholder="Message"
                      />
                    </div>
                  </form>
                </div>
                <Link to="/sign-up">
                  <Button buttonSize="btn--wide" buttonColor="green">
                    {buttonLabel}
                  </Button>
                </Link>
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
}

export default ContactForm;
