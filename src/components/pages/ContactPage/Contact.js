import React, { Fragment } from 'react';
import ContactForm from '../../layout/ContactForm/ContactForm';
import { contactFormObj } from './Data';

function Contact() {
  return (
    <Fragment>
      <ContactForm {...contactFormObj} />
    </Fragment>
  );
}

export default Contact;
