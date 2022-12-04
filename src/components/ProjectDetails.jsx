const ProjectDetails = (props) => {
  const projectInfo = [
    {
      imageUrl: "https://www.notebookcheck.net/uploads/tx_nbc2/SL4_AMD_1.jpg",
      projectHeading: "test",
      intro:"Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
      client:"Me"
   },
   {
    imageUrl: "https://www.notebookcheck.net/uploads/tx_nbc2/SL4_AMD_1.jpg",
    projectHeading: "test",
    intro:"Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
    client:"Me"
  },
  {
    imageUrl: "https://www.notebookcheck.net/uploads/tx_nbc2/SL4_AMD_1.jpg",
    projectHeading: "test",
    intro:"Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
    client:"Me"
  },
  {
    imageUrl: "https://www.notebookcheck.net/uploads/tx_nbc2/SL4_AMD_1.jpg",
    projectHeading: "test",
    intro:"Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
    client:"Me"
  },
  {
    imageUrl: "https://www.notebookcheck.net/uploads/tx_nbc2/SL4_AMD_1.jpg",
    projectHeading: "test",
    intro:"Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
    client:"Me"
  },
  {
    imageUrl: "https://www.notebookcheck.net/uploads/tx_nbc2/SL4_AMD_1.jpg",
    projectHeading: "test",
    intro:"Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
    client:"Me"
  },
  {
    imageUrl: "https://www.notebookcheck.net/uploads/tx_nbc2/SL4_AMD_1.jpg",
    projectHeading: "test",
    intro:"Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
    client:"Me"
  },
  {
    imageUrl: "https://www.notebookcheck.net/uploads/tx_nbc2/SL4_AMD_1.jpg",
    projectHeading: "test",
    intro:"Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes.",
    client:"Me"
  },
  ]


  return (
    <>  
       <section className="project-list px-3 py-5 p-md-5">
       <div className="container">
        <h2 className="section-title font-weight-bold mb-5">Featured Projects</h2>
        <div className="text-center">
				    <ul className="filters mb-5 mx-auto   ps-0">
		                <li className="type active mb-3 mb-lg-0" data-filter="*">All</li>
		                <li className="type  mb-3 mb-lg-0" data-filter=".webapp">We App</li>
		                <li className="type  mb-3 mb-lg-0" data-filter=".mobileapp">Mobile App</li>
		                <li className="type  mb-3 mb-lg-0" data-filter=".frontend">Frontend</li>
		                <li className="type  mb-3 mb-lg-0" data-filter=".backend">Backend</li>
		            </ul>
			    </div>
        <div className="row">
        {projectInfo.map((project,index) => {
      return(
         index <= props.display ? 
        <div key={index} className="col-md-6 mb-5">
						<div className="card project-card">
							<div className="row test">
								<div className="col-12 col-xl-5 card-img-holder">
									<img src={project.imageUrl} className="card-img" alt="pic" />
								</div>
								<div className="col-12 col-xl-7">
									<div className="card-body">
										<h5 className="card-title">
                    <a href="project.html" className="theme-link">{project.projectHeading}</a>
                    </h5>
										<p className="card-text">{project.intro}</p>
										<p className="card-text"><small className="text-muted">{project.client}</small></p>
									</div>
								</div>
							</div>
						</div>
					</div>
          : null
        )})}
        </div>
        <div class="text-center py-3">
        <a href="/project" class="btn btn-success">
        View Project
        </a>
        </div>
       </div>

       </section>
    </>
  )
}

export default ProjectDetails