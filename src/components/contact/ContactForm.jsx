import React from 'react'

const ContactForm = () => {
  return (
   <>
    <section className='contact-section px-3 py-5 p-md-5'>
        <div className='container'>
          <form className='contact-form col-lg-8  mx-lg-auto' method='POST'>
            <h3 className='text-center mb-3'>Get in Touch</h3>
              <div className='row g-3'>
                <div className='col-12 col-md-6'>
                <label className="sr-only" htmlFor="cname">Name</label>
                  <input type="text" className="form-control cname" name="name" placeholder="Name" minlength="2" required="" aria-required="true"></input>
                </div>
                <div className="col-12 col-md-6">
		                    <label className="sr-only" htmlFor="cemail">Email</label>
		                    <input type="email" className="form-control cemail" name="email" placeholder="Email" required="" aria-required="true" />
		                </div>
                    <div class="col-12">
			                <select id="services" class="form-select" name="services">
								<option selected="">Tell me what you are interested in...</option>
								<option value="basic">Make appoiment</option>
								<option value="standard">Recruiting</option>
								<option value="premium">Project</option>
								<option value="not sure">Other</option>
							</select>
						</div>
            <div class="col-12">
		                    <label className="sr-only" htmlFor="cmessage">Your message</label>
		                    <textarea className="form-control cmessage"  name="message" placeholder="Enter your message" rows="10" required="" aria-required="true"></textarea>
		                </div>
                    <div class="form-group col-12">
		                    <button type="submit" class="btn btn-block btn-success py-2">Send Now</button>
		                </div>
              </div> 

          </form>
        </div>
    </section>
   </>
  )
}

export default ContactForm