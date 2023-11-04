import { AiFillHtml5 } from "react-icons/ai"
import { FaBootstrap, FaCss3Alt, FaNodeJs, FaReact, FaAngular, FaSass } from "react-icons/fa"
import { SiCsharp, SiExpress, SiJavascript, SiMongodb,  SiRedux, SiTypescript, SiTailwindcss, SiDotnet, SiMysql, SiGraphql } from "react-icons/si"
import { FaNpm } from "react-icons/fa"
import { SiMaterialui } from "react-icons/si"

export const skills = [
    {
      icons:[
        <SiTypescript className='skill-icons si-ts-square me-2 me-2'/>,
        <SiJavascript className='skill-icons fa-js-square me-2 me-2'/>,
        <SiCsharp className='skill-icons si-cs-round me-2'/>,
      ],
      title: "Programing Languages",
      description: [
        "Model, Types, Scripting",
        "Typescript, Javascript, CSharp",
        "Strategic programming",
      ]
    },
    {
      icons:[
        <AiFillHtml5 className='skill-icons fa-html5 me-2'/>,
        <FaCss3Alt className='skill-icons fa-css3-alt me-2'/>,
        <FaSass className="skill-icons fa-sass me-2"/>
      ],
      title: "Web Design",
      description: [
        "Structure, Styling",
        "HTML, CSS, SASS",
        "Essential website appearance",
      ]
    },
    {
      icons:[
        <FaReact className='skill-icons fa-react me-2' />,
        <FaAngular className='skill-icons fa-angular me-2' />
      ],
      title: "Frontent Development",
      description: [
        "User interactivity",
        "React, Angular",
        "Dynamic website elements",
      ]
    },
    {
   icons:[
    <SiMaterialui className='skill-icons si-MUI me-2' />,
    <FaBootstrap className='skill-icons fa-bootstrap me-2'/>,
    <SiTailwindcss className='skill-icons si-tailwind me-2'/>
    ],
    title: "User Interface",
    description: [
      "Visual appeal",
      "MUI, Bootstrap, Tailwindcss",
      "User-friendly design",
     ]
    },
    {
      icons:[
        <FaNodeJs className='skill-icons fa-node-js me-2' />,
        <SiExpress  className='skill-icons si-express me-2'/>,
        <SiDotnet className='skill-icons si-dotnet me-2'/>
      ],
      title: "Back-end Development",
      description: [
        "Back-end building",
        "Express, Node.js, Dotnet",
        "Server-side processing",
      ]
    },
    {
      icons:[
        <SiMongodb className='skill-icons fa-mongodb me-2'/>,
        <SiMysql className="skill-icons me-2"/>,
        <SiGraphql className="skill-icons si-graphql me-2"/>,
      ],
      title: "Data Management",
      description: [
        "Data storage, organization",
        "MongoDB, SQL, Graphql",
        "Back-end database support",
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