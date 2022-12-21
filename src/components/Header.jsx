import {BsLinkedin, BsTwitter} from 'react-icons/bs'
import {FaGithubAlt} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import {FaLaptopCode} from 'react-icons/fa'
import {RiPagesLine} from 'react-icons/ri'
import {MdContactMail} from 'react-icons/md'
import {RiSendPlaneFill} from 'react-icons/ri'
import { useState } from 'react'
// import {CgDarkMode} from 'react-icons/cg'
const Header = () => {
  const [navbar, setNavbar] = useState('collapsed')
  const [show, setShow] = useState('')
  const [collapsing, setCollapsing] = useState('collapse');
  const onClick = (e) =>{
   setCollapsing('collapsing')
   setTimeout(()=>{
      setCollapsing('collapse')
   },500)
   if(navbar === 'collapsed' && show ===''){
      setNavbar('')
      setShow('show')
   } else if(navbar === '' && show === 'show'){
      setNavbar('collapsed')
      setShow('')
   }
  }
  return (
    <header className="header text-center">
        <div className="force-overflow">
            <h1 className="blog-name pt-lg-4 mb-0">Nhan Khang Le</h1>
            <nav className="navbar navbar-expand-lg navbar-dark">
            <button onClick={onClick} className={`navbar-toggler ${navbar}`} type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
                <div className={`navigation navbar-collapse flex-column ${collapsing}  ${show} `}>
                   <div className="profile-section pt-3 pt-lg-0">
                      <img className="profile-image  mb-3 rounded-circle mx-auto" src="https://media-exp1.licdn.com/dms/image/D5603AQEPljp0raV73g/profile-displayphoto-shrink_800_800/0/1666165557874?e=1675296000&v=beta&t=ap-jPdJUHV75bZPHyV8FOdYZzM-B0BqNvj80MvrRUoA" alt="pic" />
                      <div className="bio mb-3">Hi, my name is Nhan Khang Le, and I'm a student of ActivateWork and Per Scholas. Welcome to my portfolio</div>
                      <ul className="social-list list-inline py-2 mx-auto">
                        <li className="list-inline-item text-center ">
                            <a href='https://twitter.com/NKL270316' target="_blank" rel="noreferrer">
                             <BsTwitter />
                            </a> 
                         </li>
                         <li className="list-inline-item text-center ">
                            <a href='https://www.linkedin.com/in/nhan-khang-le-6905b4228/' target="_blank" rel="noreferrer">
                             <BsLinkedin />
                            </a> 
                         </li>
                         <li className="list-inline-item text-center ">
                         <a href='https://github.com/NhanKhangJ' target="_blank" rel="noreferrer">
                             <FaGithubAlt />
                            </a> 
                         </li>
                      </ul>
                      <hr />
                   </div>
                   <ul className='navbar-nav flex-column text-start'>
                     <li className='nav-item'>
                        <a className='nav-link' href='/'>
                        <BsFillPersonFill className='me-2'/>About me
                        </a>
                     </li>
                     <li className='nav-item'>
                        <a className='nav-link' href='/project'>
                        <FaLaptopCode className='me-2'/>Project
                        </a>
                     </li>
                     <li className='nav-item'>
                        <a className='nav-link' href='/resume'>
                        <RiPagesLine className='me-2'/>Resume
                        </a>
                     </li>
                     <li className='nav-item'>
                        <a className='nav-link' href='/contact'>
                        <MdContactMail className='me-2'/>Contact
                        </a>
                     </li>
                   </ul>
                   <div className='my-2'>
                     <a href='/contact' className='btn btn-outline-secondary'>
                        <RiSendPlaneFill /> Hire Me
                     </a> 
                   </div>
                   <div className='dark-mode-toggle text-center w-100'>
                     {/* <hr className='mb-4'></hr>
                     <h4 className='toggle-name mb-3'>
                        <CgDarkMode />Dark mode
                     </h4> */}

                   </div>   
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header