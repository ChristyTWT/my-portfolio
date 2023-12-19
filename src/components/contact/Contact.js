import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import * as Constants from '../../utilities/Constants'
import '../../styles/contact.scss'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs
      .sendForm(
        Constants.EMAILJS_SERVICE_ID,
        Constants.EMAILJS_TEMPLATE_ID,
        form.current,
        Constants.EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="container">
      <div className="container-contact content-margin">
        <div className="content">
          <div className="text-heading">{Constants.CONTACT_HEADING}</div>
          <div className="text-content">{Constants.CONTACT_CONTENT}</div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="text-subheading">
            {Constants.CONTACT_FORM_HEADING}
          </div>
          <input
            type="text"
            name="user_name"
            placeholder={Constants.CONTACT_FORM_NAME}
          />
          <input
            type="email"
            name="user_email"
            placeholder={Constants.CONTACT_FORM_EMAIL}
          />
          <label>{Constants.CONTACT_FORM_MSG}</label>
          <textarea name="message" />
          <input
            className="flat-button"
            type="submit"
            value={Constants.BUTTON_SEND}
          />
        </form>
      </div>
    </div>
  )
}

export default Contact;