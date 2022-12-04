import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md"
import {HiLocationMarker} from "react-icons/hi"
import {FaGithub} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"

const Resume = () => {
  return (
    <div className="container resume-container px-3 px-lg-5">
      <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
           <div className="resume-header">
            <div className="row align-items-center">
            <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
                <h2 className="resume-name mb-0 text-uppercase">Nhan Khang Le</h2>
                <div className="resume-tagline mb-0 mb-md-0">Junior Fullstack developer</div>
             </div>
             <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
                <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                     <BsFillTelephoneFill className="svg-inline--fa fa-square-phone fa-fw fa-lg me-2"/>
                    <a className="resume-link" href="tel:#">123-321-1234</a> 
                     </li>
                    <li className="mb-2">
                    <MdEmail className="svg-inline--fa fa-square-envelope fa-fw fa-lg me-2"/>
                    <a className="resume-link" href="mailto:#">khang@123.com</a> 
                    </li>
                    <li className="mb-0">
                    <HiLocationMarker /> 
                    Denver Colorado
                    </li>
                </ul>
             </div>
            </div>      
           </div>
           <hr />    
           <div className="resume-summary">
                <div className="row align-items-center">
                  <div className="col-12 col-md-3 col-xl-2 text-center">
                <img className="resume-profile-image mb-3 mb-md-0 me-md-5  ms-md-0 mx-auto" src="https://media-exp1.licdn.com/dms/image/D5603AQEPljp0raV73g/profile-displayphoto-shrink_800_800/0/1666165557874?e=1675296000&v=beta&t=ap-jPdJUHV75bZPHyV8FOdYZzM-B0BqNvj80MvrRUoA" alt="pic" />
                  </div>
                  <div className="col text-start">
                  <p className="mb-0">
                  Full-stack developer with a curiosity in technology. Able to handle and troubleshoot problems, awareness of possible issues, and develop solutions within the software development life cycle. Experienced in Collaborating with co-workers for goal-oriented results.
                  </p>
                  </div>
                </div>
           </div>
           <hr />
           <div className="resume-body">
            <div className="row">

             <div className="resume-main col-12 col-lg-8 col-xl-9   pe-0   pe-lg-5">
                <section className="work-section py-3">
                   <h3 className="text-uppercase resume-section-heading mb-4">Work Experiences</h3>
                   <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                    <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Nail techncian</h4>
                    <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Snappy Naisl | 2021-2022</div>
                    </div>
                    <div className="item-content">
                       <p>
                       Provide manicure pedicure service and listen to customer needs to archive client satisfaction
                       </p>
                       <ul className="resume-list">
                        <li>Built sustainable relationships with customers and brought multiple returning customers.</li>
                        <li>Met with clients to discuss needs, service preferences, and special requests.</li>
                        <li>Performed a high volume of daily tasks in gel, acrylic, and natural manicures.</li>
                        <li>Enforced safety procedures following facility policies and government regulations.</li>
                       </ul>
                    </div>
                   </div>
                   <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                    <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Ticketing Supervisor</h4>
                    <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Hoian Imression theme Park| 2021-2022</div>
                    </div>
                    <div className="item-content">
                       <p>
                       Supervising ticket procedure, handling customer request question and provide solutions
                       </p>
                       <ul className="resume-list">
                        <li>Multitasked within three roles resulting in promotion to Ticketing Supervisor.</li>
                        <li>Help coordinates more than seven individual events in the company and five street performances.</li>
                        <li>Trained employees on best practices and protocols while managing teams to maintain optimal productivity.</li>
                        <li>Learn more about Adobe Photoshop, and Smile Property Management system to support the marketing team.</li>
                       </ul>
                    </div>
                   </div>
                   <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                    <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Bell Man</h4>
                    <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Sheraton Grand | 2018-2020</div>
                    </div>
                    <div className="item-content">
                       <p>
                       Deliver luggage and use product knowledge to provide what client needs
                       </p>
                       <ul>
                        <li>Provided support for Asia-Pacific Economic Cooperation(APEC Viet Nam 2017), an international event which consisted of 30 ministers and presidents from around the world</li>
                        <li>Served as a member of the primary front-office team for the pre-opening economy and readied the hotel APEC Viet Nam 2017’s hosting President within a 14 day turnaround time.</li>
                        <li>Transported luggage in an efficient and prompt manner to achieve client satisfaction </li>
                        <li>Responded to guest concerns and requests and quickly handled issues.</li>
                       </ul>
                    </div>
                   </div>
                   <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                    <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Bell Man and Reception</h4>
                    <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Vinpearl Da Nang Ocean Resorts and villas | 2018-2020</div>
                    </div>
                    <div className="item-content">
                       <p>
                       Deliver luggage and Organizing files for billing, customer and client records
                       </p>
                       <ul>
                        <li>Quadrupled the improvement of report performance and billing duties by reorganization of data in comparison to previous methods</li>
                        <li>Accomplished services goals efficiently by prioritization and organization of tasks.</li>
                        <li>Demonstrated the use of TV remotes, heating/cooling systems, Wifi access and locks to hotel guests.</li>
                        <li>Reported room or property issues to maintenance staff for repairs.</li>
                       </ul>
                    </div>
                   </div>
                </section>
                <section className="project-section py-3">
                    <h3 className="text-uppercase resume-section-heading mb-4">Project</h3>
                    <div className="item-mb-3">
                        <h3>First project</h3>
                        <p>Still thinking about an project with alot of work</p>
                    </div>
                </section>    
             </div>
             <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                <section className="skills-section py-3">
                <h3 className="text-uppercase resume-section-heading mb-4">Skills</h3>
                 <div className="item">
                    <h4 className="item-title">Technical</h4>
                    <ul className="list-unstyled resume-skills-list">
                    <li className="mb-2">Html5,CSS3</li>
                    <li className="mb-2">Vanila Javascript</li>
                    <li className="mb-2">React, Node</li>
                    <li className="mb-2">Mongodb</li>
                  </ul>
                 </div>
                 <div className="item">
                    <h4 className="item-title">Professional</h4>
                    <ul className="list-unstyled resume-skills-list">
                    <li className="mb-2">Team collaboration</li>
                    <li className="mb-2">Customer Service</li>
                    <li className="mb-2">Relationship Building</li>
                    <li className="mb-2">Integrity and perseverance</li>
                  </ul>
                 </div>
                </section>
                <section className="education-section py-3">
                 <h3 className="text-uppercase resume-section-heading mb-4">Education</h3>
                 <ul className="list-unstyled resume-education-list">
                   <li className="mb-3">
                     <div className="resume-degree font-weight-bold">ActivateWork and Per Scholas Software Engineering program </div>
                     <div className="resume-degree-org text-muted">Not yet certified</div>
                   </li>
                 </ul>
                </section>
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">Languages</h3>
                  <ul className="list-unstyled resume-lang-list">
                    <li className="mb-2">
                      "VietNamese"
                      <span className="textmuted">(Professional)</span>
                    </li>
                    <li>
                      "EngLish"
                      <span className="text-muted">(Native)</span>
                    </li>
                  </ul>
                </section>
                <section className="skills-section py-3">
                <h3 className="text-uppercase resume-section-heading mb-4">Interests</h3>
                  <ul className="list-unstyled resume-lang-list">
                    <li className="mb-2">
                       New technology
                    </li>
                    <li className="mb-2">
                       Traveling
                    </li>
                    <li>
                       Guitar
                    </li>
                  </ul>
                </section>
             </aside>
           </div>
           </div>
           <hr />
           <div className="resume-footer text-center">
                <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
                    <li className="list-inline-item mb-lg-0 me-3">
                      <a className="resume-link" href=":#">
                        <FaGithub />
                        <span className="d-none d-lg-inline-block text-muted">github.com/NhanKhangJ</span>
                      </a>
                    </li>
                    <li className="list-inline-item mb-lg-0 me-3">
                      <a className="resume-link" href=":#">
                        <BsLinkedin />
                        <span className="d-none d-lg-inline-block text-muted">linkedn.com/in/</span>
                      </a>
                    </li>
                    <li className="list-inline-item mb-lg-0 me-3">
                      <a className="resume-link" href=":#/">
                        <AiFillInstagram />
                        <span className="d-none d-lg-inline-block text-muted">Insatagram</span>
                      </a>
                    </li>
                </ul>
           </div>
      </article>
    </div>
  )
}

export default Resume