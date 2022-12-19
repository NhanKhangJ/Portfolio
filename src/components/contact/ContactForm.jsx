import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createMessage } from '../../actions/message';

const ContactForm = () => {
const [message, setMessage] = useState({
  name:'',
  email:'',
  services: '',
  message:''
})

const dispath = useDispatch();

const handleSubmit = (e) =>{
  e.preventDefault()
  dispath(createMessage(message));
  clear()
}

const clear = () =>{
   setMessage({
    name:'',
    email:'',
    services: '',
    message:''
   })
}


  return (
   <>
    <section className='contact-section px-3 py-5 p-md-5'>
        <div className='container'>
          <form className='contact-form col-lg-8  mx-lg-auto' method='POST' onSubmit={handleSubmit}>
            <h3 className='text-center mb-3'>Get in Touch</h3>
              <div className='row g-3'>
                <div className='col-12 col-md-6'>
                  <input type="text" className="form-control cname" name="name" placeholder="Name" minLength="2" required="" aria-required="true" value={message.name} onChange={(e) => {setMessage({...message, name: e.target.value})}}></input>
                </div>
                <div className="col-12 col-md-6">
		                    <input type="email" className="form-control cemail" name="email" placeholder="Email" required="" aria-required="true" value={message.email} onChange={(e) => {setMessage({...message, email: e.target.value})}}/>
		                </div>
                    <div className="col-12">
                     <input type='text' className="form-control cemail" name='services' placeholder="Subject" required="" aria-required="true" value={message.services}  onChange={(e) => {setMessage({...message, services: e.target.value})}}></input>
						</div>
            <div className="col-12">
		                    <textarea className="form-control cmessage"  name="message" placeholder="Enter your message" rows="10" required="" aria-required="true"  value={message.message} onChange={(e) => {setMessage({...message, message: e.target.value})}}></textarea>
		                </div>
                    <div className="form-group col-12">
		                    <button type="submit" className="btn btn-block btn-success py-2">Send Now</button>
		                </div>
              </div> 

          </form>
        </div>
    </section>
   </>
  )
}

export default ContactForm