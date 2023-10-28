import { Component } from "react";
import {FaBriefcase} from "react-icons/fa"
import {FaGraduationCap} from "react-icons/fa"

function QualificationData({titre,sousTitre,calendrier}){
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
                    <div className="qualificationLine">

                    </div>
                </div>
            </div>
}
const DataExperience =[
    {
        titre: "vio",
        sousTitre:"",
        calendrier : ""
    },
    {
        titre: "visdso",
        sousTitre:"",
        calendrier : ""
    },
    {
        titre: "vio",
        sousTitre:"",
        calendrier : ""
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
                    <div className="sualificationButton">
                        <FaGraduationCap/>
                        <span>
                            education 
                        </span>
                    </div>
                    <div className="sualificationButton">
                        <FaBriefcase/>
                        <span>
                            Experience 
                        </span>
                    </div>
                </div>

                <div className="qualificationSection">
                    <div className="qualificationContent">
                        {
                            DataExperience.map((item,index)=>(
                                <QualificationData 
                                    key={index}
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