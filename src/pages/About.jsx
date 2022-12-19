import ProjectDetails from '../components/ProjectDetails';
import AboutMe from '../components/about/AboutMe';
import Overview from '../components/about/Overview';
const About = ({test}) => {
  return (
  <>
    <AboutMe />
    <Overview />
    <div className='container'><hr /></div>
    <ProjectDetails display={3} showBtn={test}/>
  </>
  )
}

export default About