import { skills } from "../../data/skills"

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
       {skills.map((skill, index)=> 
          <div className='item col-6 col-lg-3' key={index}>
          <div className='item-inner'>
            <div className='item-icon' style={{display:'flex'}}>
              { skill.icons.map((icon,i) =>(
                <div key={i}>
                   { icon }
                </div>
               ))}
            </div>
            <h3 className='item-title'>{skill.title}</h3>
            <div className='item-desc'>
            {skill.description.map((des,i) =>
              <div key={i}>
             {des}
             <br></br>
             </div>
           )}
            </div>
          </div>
        </div>
       )}
      </div>
    </div>
  </section>
  </>
  )
}

export default Overview