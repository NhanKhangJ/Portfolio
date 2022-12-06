import React from 'react'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaGithubAlt, FaInstagramSquare } from 'react-icons/fa'

const ContactIntro = () => {
  return (
    <>
        <section className="cta-section theme-bg-light py-5">
      <div className="container text-center single-col-max-widh">
        <h2 className="heading">Contact</h2>
        <div className="intro">
          <p>Interested in hiring me for your company or just want to say hello? You can fill in the contact form below or send me an email to <a href="mailto:/#">khang123@gmail.com</a></p>
          <p>Want to get connected? Follow me on the social channel below.</p>
          <ul className="list-inline">
             <li className="contact-list list-inline-item mb-3">
              <a href=":#"><BsTwitter className='contact-icons'/></a>
             </li>
             <li className="contact-list list-inline-item mb-3">
              <a href=":#"><BsLinkedin className='contact-icons'/></a>
             </li>
             <li className="contact-list list-inline-item mb-3">
              <a href=":#"><FaGithubAlt className='contact-icons'/></a>
             </li>
             <li className="contact-list list-inline-item mb-3">
              <a href=":#"><FaInstagramSquare className='contact-icons'/></a>
             </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactIntro