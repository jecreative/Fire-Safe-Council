import React, { Fragment, useEffect } from 'react'
import ContactForm from '../../layout/ContactForm/ContactForm'
import { contactFormObj } from './Data'

function Contact() {
  useEffect(() => {
    document.title = 'Contact - Fire Safe Council'
  }, [])
  return (
    <Fragment>
      <ContactForm {...contactFormObj} />
    </Fragment>
  )
}

export default Contact
