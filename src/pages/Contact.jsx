import {BsLinkedin, BsTwitter} from 'react-icons/bs'
import { FaGithubAlt, FaInstagramSquare } from 'react-icons/fa'
const Contact = () => {
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
								<option selected="">Select a service package you're interested in...</option>
								<option value="basic">Basic</option>
								<option value="standard">Standard</option>
								<option value="premium">Premium</option>
								<option value="not sure">Not sure</option>
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

export default Contact