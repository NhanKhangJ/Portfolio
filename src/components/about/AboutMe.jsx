import { AiFillFileText } from "react-icons/ai"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import PH from '../../images/PH.jpeg'

const AboutMe = () => {
  return (
    <section className='about-me-section p-3 p-lg-5 theme-bg-light'>
       <div className='container'>
         <div className='profile-teaser row'>
          <div className='col'>
            <h2 className='name font-weight-bold mb-1'>Nhan Khang Le</h2>
            <div className='tagline mb-3'>Frontend | Backend | Junior Developer</div>
            <div className='bio mb-4'>
            I'm a junior developer specializing in frontend and backend development for the web app. My curiosity about technology always inspires me to keep learning and moving forward. And my goal is to be better and better every day. Check out my project and digital resume to know more about me.
            </div>
            <div className='mb-4'>
              <a className="btn btn-success me-2 mb-3" href='/project'>
                <BsFillArrowRightCircleFill className='me-2'/>
                View Project
              </a>
              <a className="btn btn-secondary me-2 mb-3" href='/resume'>
                <AiFillFileText className='me-2'/>
                View Resume
              </a>
            </div>
          </div>
          <div className='col-md-5 col-lg-5'>
            <img className='profile-image img-fluid mb-3 mb-lg-0 me-md-0' src={PH} alt='pic'/>
          </div>
         </div>
       </div>
    </section>
  )
}

export default AboutMe