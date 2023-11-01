import { FaAddressBook } from "react-icons/fa"
import{FaAccusoft} from "react-icons/fa"
import { MdContactPhone, MdMenu,MdWork} from "react-icons/md"
import {FaGraduationCap,FaBriefcase,FaUser,FaEnvelope} from "react-icons/fa"

export const navBar =[
    {
        cheminLien: "home",
        icone: <MdMenu/>,
    },
    {
        cheminLien: "about",
        icone: <FaUser/>,
    },
    {
        cheminLien: "skills",
        icone: <FaBriefcase/>,
    },
    {
        cheminLien: "service",
        icone: <FaEnvelope/>,
    },
    {
        cheminLien: "experience",
        icone: <FaGraduationCap/>,
    },
    {
        cheminLien: "work",
        icone: <MdWork/>,
    },
    {
        cheminLien: "contact",
        icone:<MdContactPhone/>,
    },
    
]


export  const PourcentageCompetence = [
    {
        nom: "developpement",
        pourcentage : "90%"
    },{
        nom: "designer",
        pourcentage : "80%"
    },{
        nom: "photography",
        pourcentage : "60%"
    }
]



export  const CompetenceFini = [
    {
        icone: <FaAddressBook className="IconeCompetence"/>,
        nombre : "10",
        paragraphe: "Developpement Web Finis"
    },{
        icone: <FaAddressBook className="IconeCompetence"/>,
        nombre : "40",
        paragraphe: "illustration"
    },{
        icone:<FaAddressBook className="IconeCompetence"/>,
        nombre : "30",
        paragraphe: "Design UI/UX"
    },{
        icone:<FaAddressBook className="IconeCompetence"/>,
        nombre : "500",
        paragraphe: "Photo"
    }
]

export const frontEndDevelpper = [
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "Html",
        niveau: "Basic",
    },
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "Css",
        niveau: "advanced",
    },
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "javascript",
        niveau: "advanced",
    },
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "React",
        niveau: "Intermediare",
    },
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "vueJs",
        niveau: "niveau 2",
    },
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "Html&Css",
        niveau: "niveau 2",
    }
]
export const backEndDevelpper = [
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "jAVA",
        niveau: "Basic",
    },
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "pHP",
        niveau: "avancee",
    },
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "NodeJS",
        niveau: "avanvee",
    },
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "MySQL",
        niveau: "Intermediare",
    },
  
]