import ProjectDetails from '../components/ProjectDetails';
import AboutMe from '../components/about/AboutMe';
import Overview from '../components/about/Overview';
const About = () => {
  return (
  <>
    <AboutMe />
    
    <Overview />
    
    <div className='container'><hr /></div>
    <ProjectDetails display="3"/>
  </>
  )
}

export default About