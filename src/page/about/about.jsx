import { Component } from "react";
import "./about.css"
import {PourcentageCompetence} from "../../data/data"
import AboutFooter from "./aboutFooter";

function Competence({nom, pourcentage }){
    const cssPourcentage= {
        width : pourcentage,
    }
    return <div className="CompetenceInformation">
            <div className="aboutTitrCompetence">
                <h3 className="aboutNomCompetence">
                    {nom}
                </h3>
                <span className="aboutCompetenceStatistique">
                    {pourcentage}
                </span>
            </div>
            <div className="aboutCompetenceBar">
                <span className={`pourcentage ${nom}`} style={cssPourcentage}>
                    
                </span>
            </div>
        </div>
}

class About extends Component{
    render(){
        return <div className="about section container" id="about">
            <h2 className="sectionTitre">
                Qui suis -je?
            </h2>
            <div className="cardAbout grid">
                <img src="./assets/image/herizo.jpg" alt="" srcset="" className="photoAbout"/>
                <div className="aboutStatistique grid">
                    <div className="infoAbout">
                        <p className="aboutDecription">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quaerat doloribus, 
                            perspiciatis dolor velit, repudiandae similique aut praesentium corporis nisi deleniti 
                            accusantium qui temporibus sit, aperiam rerum accusamus ad quos.
                        </p>
                        <a href="#home" className="btn telechargerCV">Telechatger CV</a>
                    </div>

                    <div className="aboutCompetence grid">
                        {PourcentageCompetence.map((item,index)=>(
                            <Competence key={index} nom={item.nom} pourcentage={item.pourcentage}/>

                        ))}
                    </div>
                </div>
            </div>


            <AboutFooter/> 
        </div>
    }
}

export default About