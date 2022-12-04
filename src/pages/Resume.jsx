import ResumeHeader from "../components/resume/ResumeHeader";
import ResumeSummary from "../components/resume/ResumeSummary";
import ResumeBody from "../components/resume/ResumeBody";
import ResumeFooter from "../components/resume/ResumeFooter";
import { BsFilePdf } from "react-icons/bs";

const Resume = () => {
  return (
    <>
    <section class="cta-section theme-bg-light py-5">
			<div class="container text-center single-col-max-width">
				<h2 class="heading mb-3">Online Resume</h2>
				<a class="btn btn-success" href=":#" >
         <BsFilePdf /> Download PDF Version
         </a>
			</div>
		</section>
    
    <div className="container resume-container px-3 px-lg-5">
    <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
     <ResumeHeader />
     <hr />
     <ResumeSummary />
     <hr />
     <ResumeBody />
     <hr />
     <ResumeFooter />
    </article>
    </div>
    </>
  )
}

export default Resume