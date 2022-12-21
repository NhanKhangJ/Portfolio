import {FaGithub} from "react-icons/fa"
import {BsLinkedin, BsTwitter} from "react-icons/bs"

const ResumeFooter = () => {
  return (
    <div className="resume-footer text-center">
                <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
                <li className="list-inline-item mb-lg-0 me-3">
                      <a className="resume-link" href='https://twitter.com/NKL270316' target="_blank" rel="noreferrer">
                      <BsTwitter />
                        <span className="d-none d-lg-inline-block text-muted">&nbsp;Twitter</span>
                      </a>
                    </li>
                    <li className="list-inline-item mb-lg-0 me-3">
                      <a className="resume-link" href='https://www.linkedin.com/in/nhan-khang-le-6905b4228/' target="_blank" rel="noreferrer">
                        <BsLinkedin />
                        <span className="d-none d-lg-inline-block text-muted">&nbsp;Linkedn</span>
                      </a>
                    </li>
                    <li className="list-inline-item mb-lg-0 me-3">
                      <a className="resume-link" href='https://github.com/NhanKhangJ' target="_blank" rel="noreferrer">
                        <FaGithub />
                        <span className="d-none d-lg-inline-block text-muted">&nbsp;Github</span>
                      </a>
                    </li>
                </ul>
           </div>
  )
}

export default ResumeFooter