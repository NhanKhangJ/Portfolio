import React from 'react'
import { workExp } from '../../data/workExp'


const ResumeBody = () => {
  return (
    <div className="resume-body">
            <div className="row">
             <div className="resume-main col-12 col-lg-8 col-xl-9   pe-0   pe-lg-5">
                <section className="work-section py-3">
                   <h3 className="text-uppercase resume-section-heading mb-4">Work Experiences</h3>
                   {workExp.map((work)=>{
                    return(
                      <div className="item mb-3">
                    <div className="item-heading row align-items-center mb-2">
                    <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">{work.title}</h4>
                    <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">{work.employer}</div>
                    </div>
                    <div className="item-content">
                       <p>
                       {work.jobDescription}
                       </p>
                       <ul className="resume-list">
                        {work.jobDetails.map((item)=>{
                          return(
                            <li>{item}</li>
                          )
                        })}
                       </ul>
                    </div>
                   </div>
                    )
                   })}
                </section>
                <section className="project-section py-3">
                    <h3 className="text-uppercase resume-section-heading mb-4">Project</h3>
                    <div className="item-mb-3">
                        <h5>Pokemon Crud</h5>
                        <p>a web application about pokemon using M.E.R.N stack and inline styling CSS</p>
                    </div>
                    <div className="item-mb-3">
                        <h5>Play Along</h5>
                        <p>a mutilplayer game about Piano, all you have to do is play the same note that is given to get point</p>
                    </div>
                    <div className="item-mb-3">
                        <h5>And a more in GitHub</h5>
                        <p>Visit my <a  href="https://github.com/NhanKhangJ" target="blank" rel>GitHub</a> to know more about what I learn and what I do.</p>
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
                     <div className="resume-degree font-weight-bold">Per Scholas Software Engineering program </div>
                     {/* <div className="resume-degree-org text-muted">Not yet certified</div> */}
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
  )
}

export default ResumeBody