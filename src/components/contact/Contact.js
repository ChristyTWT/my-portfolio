import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import '../../styles/contact.scss'

const Contact = () => {
  const form = useRef()
  const EMAILJS_SERVICE_ID = 'service_hs4067j';
  const EMAILJS_TEMPLATE_ID = 'template_g7608qg'
  const EMAILJS_PUBLIC_KEY = 'wDu0vy6w9ODoNHATQ';

  const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
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
      <div className="content">
        <div className="text-heading">Ready to Get Started ?</div>
        <div className="text-content">Fill in the form to get started !</div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="text-subheading">Send Me a Message!</div>
        <input type="text" name="user_name" placeholder="Your name.." />
        <input type="email" name="user_email" placeholder="Your email.." />
        <label>Message</label>
        <textarea name="message" />
        <input id="submit" type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact;