import { Component } from "react";
import {FaBriefcase} from "react-icons/fa"
import './experience.css'
import {FaGraduationCap} from "react-icons/fa"

function QualificationData({id,titre,sousTitre,calendrier}){
    if ((id% 2)===0){
        return <div className="qualificationData">
                <div>
                    <h3 className="SectionTitre">{titre}</h3>
                    <span className="qualificationSousTitre">
                        {sousTitre} 
                    </span>
                    <div className="qualificationCalendar">
                        <FaBriefcase/> {"   " + calendrier}
                    </div>
                </div>

                <div>
                    <span className="qualificationRounder">

                    </span>
                    <span className="qualificationLine">
                        
                    </span>
                </div>
            </div>
    }
    return <div className="qualificationData">
                <div>
                    <span className="qualificationRounder">

                    </span>
                    <span className="qualificationLine">
                        
                    </span>
                </div>
                <div>
                    <h3 className="SectionTitre">{titre}</h3>
                    <span className="qualificationSousTitre">
                        {sousTitre} 
                    </span>
                    <div className="qualificationCalendar">
                        <FaBriefcase/> {"   " + calendrier}
                    </div>
                </div>
            </div>
}
const DataExperience =[
    {
        titre: "Informatique",
        sousTitre:"Informatique , Multimedia ,Technologie de  l'information et de communication, Intelligence Artificielle(ISPM)",
        calendrier : "2020-2022"
    },
    {
        titre: "BaccLaureat C",
        sousTitre:"Au sein de Institution Sainte Famille Mahamasina (ISF)",
        calendrier : "2021"
    },
    {
        titre: "BEPC",
        sousTitre:"Au sein de l'ecole sacré coeur Anosizato (ESCA)",
        calendrier : "2018"
    },
]

class Experience extends Component{
    render(){
        return <div className="experience section container" id="experience">
            <h1 className="sectionTitre">
                Experience
            </h1>

            <div className="qualificaionContainer Container">
                <div className="qualificationHeader">
                    <div className="qualificationButton qualificationActive">
                        <FaGraduationCap className="qualificationIcone"/>
                        <span>
                            Formation 
                        </span>
                    </div>
                    <div className="qualificationButton">
                        <FaBriefcase className="qualificationIcone"/>
                        <span>
                            Experience 
                        </span>
                    </div>
                </div>

                <div className="qualificationSection">
                    <div className="qualificationContent active">
                        {
                            DataExperience.map((item,index)=>(
                                <QualificationData 
                                    key={index}
                                    id={index} 
                                    titre={item.titre} 
                                    sousTitre={item.sousTitre} 
                                    calendrier={item.calendrier}
                                />

                            ))
                        }

                    </div><div className="qualificationContent">
                        {
                            DataExperience.map((item,index)=>(
                                <QualificationData 
                                    key={index}
                                    id={index}
                                    titre={item.titre} 
                                    sousTitre={item.sousTitre} 
                                    calendrier={item.calendrier}
                                />

                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    }
}
export default Experience