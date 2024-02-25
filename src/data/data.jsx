import { FaAddressBook } from "react-icons/fa"
import{FaAccusoft} from "react-icons/fa"
import { MdContactPhone, MdMenu,MdReviews,MdWork} from "react-icons/md"
import {FaGraduationCap,FaBriefcase,FaUser,FaEnvelope} from "react-icons/fa"

export const navBar =[
    {
        cheminLien: "home",
        icone: <MdMenu/>,
        nom: "Home",
    },
    {
        cheminLien: "about",
        icone: <FaUser/>,
        nom: "About",
    },
    {
        cheminLien: "skills",
        icone: <FaBriefcase/>,
        nom: "Skills",
    },
    {
        cheminLien: "service",
        icone: <FaEnvelope/>,
        nom: "Service",
    },
    {
        cheminLien: "experience",
        icone: <FaGraduationCap/>,
        nom: "Experience",
    },
    {
        cheminLien: "work",
        icone: <MdWork/>,
        nom: "Work",

    },
    {
        cheminLien: "contact",
        icone:<MdContactPhone/>,
        nom: "Contact",
    },
    {
        cheminLien: "review",
        icone:<MdReviews/>,
        nom: "Review",
    },
    
]


export  const PourcentageCompetence = [
    {
        nom: "developement",
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
        paragraphe: "Web completely"
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
    // {
    //     icone: <FaAccusoft className="IconeSkills"/>,
    //     nom : "Html",
    //     niveau: "Basic",
    // },
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "React",
        niveau: "Intermediare",
    },
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "javascript",
        niveau: "advanced",
    },
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "vueJs",
        niveau: "niveau 2",
    },
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "Css",
        niveau: "advanced",
    },
]
export const backEndDevelpper = [
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "Java",
        niveau: "Basic",
    },
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "PHP",
        niveau: "advanced",
    },
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "NodeJS",
        niveau: "advanced",
    },
    {
        icone: <FaAccusoft className="IconeSkills"/>,
        nom : "MySQL",
        niveau: "Intermediare",
    },
  
]