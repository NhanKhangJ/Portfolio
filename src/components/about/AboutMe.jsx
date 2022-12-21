import { AiFillFileText } from "react-icons/ai"
import { BsFillArrowRightCircleFill } from "react-icons/bs"


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
            <img className='profile-image img-fluid mb-3 mb-lg-0 me-md-0' src="https://media-exp1.licdn.com/dms/image/D5603AQEPljp0raV73g/profile-displayphoto-shrink_800_800/0/1666165557874?e=1675296000&v=beta&t=ap-jPdJUHV75bZPHyV8FOdYZzM-B0BqNvj80MvrRUoA" alt='pic'/>
          </div>
         </div>
       </div>
    </section>
  )
}

export default AboutMe