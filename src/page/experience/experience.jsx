import { useState } from "react";
import {FaBriefcase} from "react-icons/fa"
import './experience.css'
import {FaGraduationCap} from "react-icons/fa"
import { DataExperience,aide } from "../../data/dataExperience";

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

export default function Experience() {
        const [items,setItems]= useState(DataExperience)
        const [active,setActive]= useState(0)
        const FilterItem = (idItem)=>{
            const updateItems = DataExperience.filter((element)=>{
                return element.category === idItem
            })
            setActive(idItem)
            setItems(updateItems)
        }
   

        return <div className="experience section container" id="experience">
            <h1 className="sectionTitre">
                Experience
            </h1>

            <div className="qualificaionContainer Container">
                <div className="qualificationHeader">
                    {aide.map((item,index)=>(
                        <div 
                        className={`${active === item || (active === 0 && index===0)? 'qualificationButton qualificationActive':'qualificationButton'}`}
                            key={index}
                            onClick={()=>FilterItem(item)}
                        >
                            <FaGraduationCap className="qualificationIcone"/>
                            <span>
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="qualificationSection">
                    <div className="qualificationContent active">
    
                        {items.map((item,index)=>{
                            const { titre, sousTitre, calendrier} =item
                            
                            if (items.length>4){
                                    FilterItem("formation")
                            }
                            
                            return  <div key={index}> 
                            {items.length>4}
                                       <QualificationData 
                                                key={index}
                                                id={index} 
                                                titre={titre} 
                                                sousTitre={sousTitre} 
                                                calendrier={calendrier}
                                            />
                                        </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
}
