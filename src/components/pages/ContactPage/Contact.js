import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import ContactForm from '../../layout/ContactForm/ContactForm'
import { contactFormObj } from './Data'

function Contact() {
  return (
    <Fragment>
      <Helmet>
        <title>Contact - Fire Safe Council</title>
        <meta
          name='description'
          content='We’d love to hear from you. Please send us a message through our contact form or send us an email at usfiresafecouncil@gmail.com.

          '
        />
      </Helmet>
      <ContactForm {...contactFormObj} />
    </Fragment>
  )
}

export default Contact
