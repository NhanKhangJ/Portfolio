import PH from '../../images/PH.jpeg'

const ResumeSummary = () => {
  return (
    <div className="resume-summary">
    <div className="row align-items-center">
      <div className="col-12 col-md-3 col-xl-2 text-center">
    <img className="resume-profile-image mb-3 mb-md-0 me-md-5  ms-md-0 mx-auto" src={PH} alt="pic" />
      </div>
      <div className="col text-start">
      <p className="mb-0">
Junior developer able to recognize complex problems and troubleshoot issues to develop solutions within the software development lifecycle. Skilled at collaborating with co-workers for goal-oriented results.
      </p>
      </div>
    </div>
</div>
  )
}

export default ResumeSummary