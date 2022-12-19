import { AiFillHtml5 } from "react-icons/ai"
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa"
import { SiJavascript, SiMongodb } from "react-icons/si"

const Overview = () => {
  return (
    <>
    <section className='overview-section p-3 p-lg-5'>
    <div className='container'>
      <h2 className='section-title font-weight-bold mb-3'>
        What I do
      </h2>
      <div className='section-intro mb-5'>
        I have receive trainning through ActivateWork and Per Scholas with the software engineering program. I am learning the MERN stack durring this trainning.
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
              <FaReact className='skill-icons fa-react' />
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
            <FaNodeJs className='skill-icons fa-node-js'/>
            <SiMongodb className='skill-icons fa-mongodb'/>
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
  </>
  )
}

export default Overview