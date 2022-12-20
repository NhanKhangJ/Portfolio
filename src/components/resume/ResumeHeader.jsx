import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md"
import {HiLocationMarker} from "react-icons/hi"

const ResumeHeader = () => {
  return (
    <div className="resume-header">
    <div className="row align-items-center">
    <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
        <h2 className="resume-name mb-0 text-uppercase">Nhan Khang Le</h2>
        <div className="resume-tagline mb-0 mb-md-0">Junior Fullstack developer</div>
     </div>
     <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
        <ul className="list-unstyled mb-0">
            <li className="mb-2">
             <BsFillTelephoneFill className="svg-inline--fa fa-square-phone fa-fw fa-lg me-2"/>
            <a className="resume-link" href="tel:#">720-341-4148</a> 
             </li>
            <li className="mb-2">
            <MdEmail className="svg-inline--fa fa-square-envelope fa-fw fa-lg me-2"/>
            <a className="resume-link" href="mailto:khangle51096@gmail.com">khangle51096@gmail.com</a> 
            </li>
            <li className="mb-0">
            <HiLocationMarker /> 
            &nbsp;&nbsp;Denver | Colorado
            </li>
        </ul>
     </div>
    </div>      
   </div>
  )
}

export default ResumeHeader