import fisrtProject from '../images/firstProject.png';
import marvelGenerator from '../images/marvelGenerator.png'
import alienAttack from '../images/alienAttack.png'
import playAlong from '../images/playAlong.png'
import pokemonCrud from '../images/pokemonCrud.png'
import seconPortfolio from '../images/seconPortfolio.png';
import { BsGithub } from 'react-icons/bs';
import { BsGlobe } from 'react-icons/bs';
import { useState } from 'react';

const ProjectDetails = (props) => {
  const projectInfo = [
    { 
      projectName: 'Pokemon Crud',
      imageUrl: pokemonCrud,
      projectUrl: "https://odd-rose-stingray-wrap.cyclic.app/pokemon",
      intro: "a CRUD application with React views, express server, Mongdb database, Nodejs enviroment.",
      techUse: "M.E.R.N stack, CSS inline styling",
      GitHub: 'https://github.com/NhanKhangJ/Pokemon_express.git',
      type: ["All", "Web App", "Frontend", "Backend"]
    },
    { 
      projectName: 'Second Portfolio',
      imageUrl: seconPortfolio,
      projectUrl: "/",
      intro: "Happy to see my Portfolio become more professional and combine useful library to build this project.",
      techUse: "M.E.R.N stack, Redux, Bootstrap",
      GitHub: 'https://github.com/NhanKhangJ/Portfolio.git',
      type: ["All", "Web App", "Mobile app", "Frontend", "Backend"]
    },
    { 
      projectName: 'Play along',
      imageUrl: playAlong,
      projectUrl: "https://nhankhangj.github.io/GameOn/",
      intro:"One of my favorite project with more oriented code with new logic and diffrents ways to approach",
      techUse: "HTML5, CSS3, JS",
      GitHub: 'https://github.com/NhanKhangJ/GameOn.git',
      type: ["All", "Web App","Mobile App" ,"Frontend"]
    },
    { 
      projectName: 'Marvel Movies Generator',
      imageUrl: marvelGenerator,
      projectUrl: "https://nhankhangj.github.io/quotes-generator/",
      intro:"Focus on Praticing DOM manipulation and CSS grid layouts, also CSS properties",
      techUse: "HTML5, CSS3, JS",
      GitHub: 'https://github.com/NhanKhangJ/quotes-generator',
      type: ["All", "Web App", "Mobile App" ,"Frontend"]
   },
    { 
      projectName: 'First Portfolio',
      imageUrl: fisrtProject,
      projectUrl: "https://nhankhangj.github.io/NKL-week1-site/index.html",
      intro:"This is my first project for Pre-work assignment with minimum of Html and css styling requirement.",
      techUse: "HTML5, CSS3, JS",
      GitHub: 'https://github.com/NhanKhangJ/NKL-week1-site',
      type: ["All", "Web App","Mobile App" ,"Frontend"]
   },
   { 
      projectName: 'Alien Attack',
      imageUrl: alienAttack,
      projectUrl: "https://nhankhangj.github.io/ALIEN-ATTACK/",
      intro:"Use Obeject Oriented JavaScript, sharpen DOM manipulation skills and CSS flexbox.",
      techUse: "HTML5, CSS3, JS",
      GitHub: 'https://github.com/NhanKhangJ/ALIEN-ATTACK.git',
      type: ["All", "Web App", "Frontend"]
   }
]

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
				    <ul  id="filters" className="filters mb-5 mx-auto ps-0">
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
										<a href={project.projectUrl}  className="btn btn-success mx-2"><small><BsGlobe/> Website</small></a>
                    <a href={project.GitHub} className="btn btn-secondary mx-2"><small><BsGithub/> Github&nbsp;</small></a>
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
