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
           Welcome to my Projects. I'm have some project that I want to show you, please take a look. I'm looking for junior developer . I'm happy to create or coorparte with your web app.
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