import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import ProjectDetails from '../components/ProjectDetails'
const Project = ({test}) => {
  return (
    <>
    <section className='cta-section theme-bg-light py-5'>
      <div className='container text-center single-col-max-width'>
        <h2 className='heading'>Projects</h2>
        <div className='intro'>
         <p>
         Welcome to my Projects. These projects are made during the Per Scholas program, and I'm happy to create or cooperate with your web application.
         </p>
        </div>
        <a class="btn btn-success" href="/contact">
        <RiSendPlaneFill /> Hire me
        </a>
      </div>
    </section>
    <ProjectDetails display="8" showBtn={test}/>
    </>
  )
}

export default Project