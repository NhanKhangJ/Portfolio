import { projectInfo } from '../data/project';
import { BsGithub } from 'react-icons/bs';
import { BsGlobe } from 'react-icons/bs';
import { useState } from 'react';

const ProjectDetails = (props) => {

const [filterClass, setFilterClass] = useState({
   all:"active",
   webApp:"",
   mobileApp:"",
   frontEnd:"",
   backEnd:""
})

const [filterProject, setFilterProject] =useState({
  type: "All"
})


  return (
    <>  
       <section className="project-list px-3 py-5 p-md-5">
       <div className="container">
        <h2 style={ props.showBtn ? {display: 'none'}: null} className="section-title font-weight-bold mb-5">Featured Projects</h2>
        <h1 style={ props.showBtn ?  null :{display: 'none'}} className='font-weight-bold mb-5 text-center'>Projects</h1>

        <div style={ props.showBtn ?  null :{display: 'none'}}  className="text-center">
				    <ul id="filters" className="filters mb-5 mx-auto ps-0">
		                <li className={`type mb-3 mb-lg-0 ${filterClass.all}`} data-filter="*" onClick={()=>{ setFilterClass({
                       all:"active",
                       webApp:"",
                       mobileApp:"",
                       frontEnd:"",
                       backEnd:""
                    });setFilterProject({type: "All"}) }}>All</li>
		                <li className={`type mb-3 mb-lg-0 ${filterClass.webApp}`} data-filter=".webapp" onClick={()=>{ setFilterClass({
                       all:"",
                       webApp:"active",
                       mobileApp:"",
                       frontEnd:"",
                       backEnd:""
                    });setFilterProject({type: "Web App"}) }}>Web App</li>
		                <li className={`type mb-3 mb-lg-0 ${filterClass.mobileApp}`} data-filter=".mobileapp" onClick={()=>{ setFilterClass({
                       all:"",
                       webApp:"",
                       mobileApp:"active",
                       frontEnd:"",
                       backEnd:""
                    });setFilterProject({type: "Mobile App"})  }}>Mobile App</li>
		                <li className={`type mb-3 mb-lg-0 ${filterClass.frontEnd}`} data-filter=".frontend" onClick={()=>{ setFilterClass({
                       all:"",
                       webApp:"",
                       mobileApp:"",
                       frontEnd:"active",
                       backEnd:""
                    });setFilterProject({type: "Frontend"})  }}>Frontend</li>
		                <li className={`type mb-3 mb-lg-0 ${filterClass.backEnd}`} data-filter=".backend" onClick={()=>{ setFilterClass({
                       all:"",
                       webApp:"",
                       mobileApp:"",
                       frontEnd:"",
                       backEnd:"active"
                    });setFilterProject({type: "Backend"})  }}>Backend</li>
		            </ul>
			    </div>
        <div className="row">
      
        {projectInfo.map((project,index) => {
           
      return(
         index <= props.display && project.type.includes(filterProject.type)  ? 
        
        <div key={index} className="col-md-6 mb-5">
						<div className="card project-card">
							<div className="row test">
								<div className="col-12 col-xl-5 card-img-holder">
									<img src={project.imageUrl} className="card-img" alt="pic" />
								</div>
								<div className="col-12 col-xl-7">
									<div className="card-body">
										<h5 className="card-title">
                    {project.projectName}
                    </h5>
										<p className="card-text">{project.intro}</p>
                    <p className="card-test">Technology:&nbsp;{project.techUse}</p>
                    <div className="d-flex flex-row justify-content-around">
                    <a href={project.projectUrl}  className="btn btn-success d-flex justify-content-center" target="_blank" rel="noreferrer"><small className="d-flex justify-content-center align-items-center"><BsGlobe/>&nbsp;Website</small></a>
                    <a href={project.GitHub} className="btn btn-secondary d-flex justify-content-center" target="_blank" rel="noreferrer"><small className="d-flex justify-content-center align-items-center"><BsGithub/>&nbsp;Github&nbsp;</small></a>
                    </div>
									</div>
								</div>
							</div>
						</div>
					</div>
          : null
        ) 
        })}
        </div>
        <div style={ props.showBtn ? {display: 'none'}: null} className="text-center py-3">
        <a href="/project" className="btn btn-success">
        View Project
        </a>
        </div>
       </div>

       </section>
    </>
  )
}

export default ProjectDetails
