import React, { Fragment } from 'react';
import HeroSection from '../../layout/HeroSection';
import ContactForm from '../../layout/ContactForm';
import { homeObjOne, homeObjThree, contactFormObj } from './Data';

function Contact() {
  return (
    <Fragment>
      <ContactForm {...contactFormObj} />
    </Fragment>
  );
}

export default Contact;
