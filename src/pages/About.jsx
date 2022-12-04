import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {AiFillFileText} from 'react-icons/ai';
import {SiJavascript, SiMongodb} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt, FaNodeJs} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import ProjectDetails from '../components/ProjectDetails';
const About = () => {
  return (
  <>
    <section className='about-me-section p-3 p-lg-5 theme-bg-light'>
       <div className='container'>
         <div className='profile-teaser row'>
          <div className='col'>
            <h2 className='name font-weight-bold mb-1'>Nhan Khang Le</h2>
            <div className='tagline mb-3'>Junior Fullstack developer</div>
            <div className='bio mb-4'>
              I'm a junior developer specialised in frontend and backend development for web app. My curiosity about technology always inspires me to keep learning and moving forward. I like to challenge myself about things that I can’t do. Check out my project and online resume know more about me.
            </div>
            <div className='mb-4'>
              <a className="btn btn-success me-2 mb-3" href='/project'>
                <BsFillArrowRightCircleFill className='me-2'/>
                View Project
              </a>
              <a className="btn btn-dark me-2 mb-3" href='/resume'>
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
    <section className='overview-section p-3 p-lg-5'>
      <div className='container'>
        <h2 className='section-title font-weight-bold mb-3'>
          What I do
        </h2>
        <div className='section-intro mb-5'>
          I have receive trainning through ActivateWork and Per Scholas with the software engineering program. I learn the MERN stack durring this trainning.
        </div>
        <div className='row'>
          <div className='item col-6 col-lg-3'>
            <div className='item-inner'>
              <div className='item-icon'>
                <SiJavascript className='skill-icons fa-js-square me-2'/>
              </div>
              <h3 className='item-title'>Vanila JavaScript</h3>
              <div className='item-desc'>
                Object oriented JavaScript 
                <br></br>
                Manipulating Dom
                <br></br>
                Asyncronoss JavaScript
              </div>
            </div>
          </div>
          <div className='item col-6 col-lg-3'>
            <div className='item-inner'>
              <div className='item-icon'>
              <AiFillHtml5 className='skill-icons fa-html5 me-2'/>
                <FaCss3Alt className='skill-icons fa-css3-alt'/>
              </div>
              <h3 className='item-title'>Html & Css</h3>
              <div className='item-desc'>
                Html element
                <br></br>
                Css styling
                <br></br>
                Css seclector
              </div>
            </div>
          </div>
          <div className='item col-6 col-lg-3'>
            <div className='item-inner'>
              <div className='item-icon'>
                <FaReact className='skill-icons'/>
              </div>
              <h3 className='item-title'>React</h3>
              <div className='item-desc'>
                React components
                <br></br>
                React router
                <br></br>
                Redux toolkit
              </div>
            </div>
          </div>
          <div className='item col-6 col-lg-3'>
            <div className='item-inner'>
              <div className='item-icon'>
              <FaNodeJs className='skill-icons'/>
              <SiMongodb className='skill-icons'/>
              </div>
              <h3 className='item-title'>Nodejs & Mongodb</h3>
              <div className='item-desc'>
                Nodejs enviroment
                <br></br>
                Express server
                <br></br>
                Mongodb Database
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className='container'><hr /></div>
    <ProjectDetails display="3"/>
  </>
  )
}

export default About