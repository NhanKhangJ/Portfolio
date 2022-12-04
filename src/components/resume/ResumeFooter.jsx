import {FaGithub} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"

const ResumeFooter = () => {
  return (
    <div className="resume-footer text-center">
                <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
                    <li className="list-inline-item mb-lg-0 me-3">
                      <a className="resume-link" href=":#">
                        <FaGithub />
                        <span className="d-none d-lg-inline-block text-muted">github.com/NhanKhangJ</span>
                      </a>
                    </li>
                    <li className="list-inline-item mb-lg-0 me-3">
                      <a className="resume-link" href=":#">
                        <BsLinkedin />
                        <span className="d-none d-lg-inline-block text-muted">linkedn.com/in/</span>
                      </a>
                    </li>
                    <li className="list-inline-item mb-lg-0 me-3">
                      <a className="resume-link" href=":#/">
                        <AiFillInstagram />
                        <span className="d-none d-lg-inline-block text-muted">Insatagram</span>
                      </a>
                    </li>
                </ul>
           </div>
  )
}

export default ResumeFooter