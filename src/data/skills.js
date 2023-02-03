import { AiFillHtml5 } from "react-icons/ai"
import { FaBootstrap, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa"
import { SiExpress, SiJavascript, SiMongodb,  SiRedux } from "react-icons/si"
import { FaNpm } from "react-icons/fa"
import { SiMaterialui } from "react-icons/si"

export const skills = [
    {
      icons:[
        <AiFillHtml5 className='skill-icons fa-html5 me-2'/>,
        <FaCss3Alt className='skill-icons fa-css3-alt me-2'/>
      ],
      title: "Web Design",
      description: [
        "Structure, Styling",
        "HTML, CSS",
        "Essential website appearance",
      ]
    },
    {
      icons:[
        <SiJavascript className='skill-icons fa-js-square me-2'/>,
        <FaReact className='skill-icons fa-react me-2' />,
       
      ],
      title: "Interactive Elements",
      description: [
        "User interactivity",
        "JavaScript, React",
        "Dynamic website elements",
      ]
    },
    {
   icons:[
    <SiMaterialui className='skill-icons si-MUI me-2' />,
    <FaBootstrap className='skill-icons fa-bootstrap me-2'/>
    ],
    title: "User Interface",
    description: [
      "Visual appeal",
      "MUI, Bootstrap",
      "User-friendly design",
     ]
    },
    {
      icons:[
        <SiRedux className='skill-icons si-redux me-2'/>
      ], 
      title: "State Management",
      description: [
        "Front-end organization",
        "Data changes tracking",
        "Redux library",
      ]
    },
    {
      icons:[
        <FaNodeJs className='skill-icons fa-node-js me-2' />,
      <SiExpress  className='skill-icons si-express me-2'/>,
      ],
      title: "Server-side Development",
      description: [
        "Back-end building",
        "Express, Node.js",
        "Server-side processing",
      ]
    },
    {
      icons:[
        <SiMongodb className='skill-icons fa-mongodb me-2'/>
      ],
      title: "Data Management",
      description: [
        "Data storage, organization",
        "MongoDB",
        "Back-end database support",
      ]
    },
    {
      icons:[
        <FaNpm className='skill-icons fa-npm me-2'/>,
      ],
      title: "Package Management",
      description: [
        "Easy library management",
        "NPM",
        "Library installation",
      ]
    },
    
]

// {
//   icons:[

//   ],
//   title: "",
//   description: [
//     "",
//     "",
//     "",
//   ]
// }